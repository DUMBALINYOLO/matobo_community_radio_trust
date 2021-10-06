from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'api/messaging/', include('messaging.urls')),
    re_path(r'api/membership/', include('membership.urls')),
    re_path(r'api/projects/', include('projects.urls')),
    re_path(r'api/donations/', include('donations.urls')),
    path('', index),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
