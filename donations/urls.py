from rest_framework.routers import DefaultRouter
from .apis import DonationViewSet


router = DefaultRouter()


router.register(r'donations', DonationViewSet, basename='donations')

urlpatterns = router.urls
