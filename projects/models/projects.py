from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=200)


    def __str__(self):
        return self.name



class Project(models.Model):

    name = models.CharField(max_length=200)
    category = models.ForeignKey(
                            Category,
                            related_name = 'projects',
                            on_delete=models.SET_NULL,
                            null=True
                        )
    description = models.TextField()
    location = models.CharField(max_length=300, blank=True, null=True)
    url_link = models.CharField(blank=True, max_length=300, null=True)
    image = models.ImageField(
                        upload_to='services/%Y/%m/%d/',
                        null=True,
                        blank=True
                    )


    def __str__(self):
        return self.name



class Image(models.Model):
    id = models.AutoField(primary_key=True)
    project = models.ForeignKey(
                            'Project',
                            on_delete=models.PROTECT,
                            related_name='gallery'
                        )
    photo= models.ImageField(
                        upload_to='projects/%Y/%m/%d/',
                        null=True,
                        blank=True
                    )



    def __str__(self):
        return str(self.id)
