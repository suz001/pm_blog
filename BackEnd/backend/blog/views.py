from django.shortcuts import render

from rest_framework.views import APIView
 
# import the BlogSerializer from the serializer file
from blog.serializer import BlogSerializer
 
# import the Todo model from the models file
from blog.models import Blog
from rest_framework.response import Response

# create a class for the Blog model viewsets
class BlogView(APIView):
 
    def get(self,request):
        output = [{"title": output.title,
                   "content": output.content}
                   for output in Blog.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)