from rest_framework import serializers
from projects.models import (
                    Project,
                    Category,
                    Image,
                )



class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return self.value


class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    category = StringSerializer()

    class Meta:
        model = Project
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        models = Category
        fields = "__all__"


class ImageSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField()

    class Meta:
        model = Image
        fields = [
            'id',
            'photo',
        ]
