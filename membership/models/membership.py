from django.db import models





class Membership(models.Model):

    name = models.CharField(
                        max_length=500,
                        blank=True,
                        null=True
                    )
    description = models.TextField(blank=True)
    becoming_a_member = models.TextField(blank=True)



    def __str__(self):
        return self.name
