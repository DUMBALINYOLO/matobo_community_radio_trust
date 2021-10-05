from rest_framework import viewsets, permissions
from projects.models import (
                    Project,
                    Category,
                    Image,
                )
from projects.serializers import (
                        ProjectSerializer,
                        CategorySerializer,
                        ImageSerializer,
                    )




def get_project(project_id):
    try:
        project = Project.objects.get(id=project_id)
        return project
    except Project.DoesNotExist:
        return 'Project Does Not Exist'



class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()



class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer
    queryset = Project.objects.select_related('category').order_by('-id')



class ImageViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = ImageSerializer


    def queryset(self, *args, **kwargs):
        queryset = Image.objects.select_related(
                                            'project'
                                        ).order_by('-id')
        project_id = self.query_params.get('id', None)

        if project_id is not None:
            project = get_project(project_id)
            if project != 'Project Does Not Exist':
                queryset = queryset.filter(
                            project=project
                )
            else:
                queryset = []
        return queryset
