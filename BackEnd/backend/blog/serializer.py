from rest_framework import serializers
 
# import the todo data model
from blog.models import Blog
 
# create a serializer class
class BlogSerializer(serializers.ModelSerializer):

    # create a meta class
    class Meta:
        model = Blog
        fields = ['title','author','content',
                  'created_at','updated_at','category','image','slug']
        
    def get_photo_url(self,obj):
        request = self.content.get('request')
        photo_url = obj.fingerprint.url
        return request.build_absolute_uri(photo_url)