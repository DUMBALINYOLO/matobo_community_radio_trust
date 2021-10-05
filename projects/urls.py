from rest_framework.routers import DefaultRouter
from .apis import (
            CategoryViewSet,
            ProjectViewSet,
            ImageViewSet,
        )


router = DefaultRouter()

router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'images', ImageViewSet, basename='images')

urlpatterns = router.urls
