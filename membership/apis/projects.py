from rest_framework import viewsets, permissions
from membership.models import (
                        Membership
                    )
from membership.serializers import (
                    MembershipSerializer
                )



class MembershipViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Membership.objects.all().order_by('-id')
    serializer_class = MembershipSerializer
