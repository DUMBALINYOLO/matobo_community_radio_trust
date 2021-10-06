from rest_framework import viewsets, permissions
from donations.models import Donation
from donations.serializers import DonationSerializer


class DonationViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny, ]
    serializer_class = DonationSerializer
    queryset = Donation.objects.all().order_by('-id')