from django.db import models



class Donation(models.Model):

    platform_name = models.CharField(max_length=200)
    organization_link = models.CharField(max_length=500)
    donation_request_message = models.TextField()



    def __str__(self):

        return self.platform_name