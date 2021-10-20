from django.db import models



class Donation(models.Model):

    name = models.CharField(max_length=200, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=200, blank=True, null=True)



    def __str__(self):

        return self.name
