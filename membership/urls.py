from rest_framework.routers import DefaultRouter
from .apis import MembershipViewSet


router = DefaultRouter()


router.register(r'memberships', MembershipViewSet, basename='memberships')

urlpatterns = router.urls
