from rest_framework import serializers
 
# import the todo data model
from blog.models import Blog
 
# create a serializer class
class BlogSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Blog
        fields = ['title','content']