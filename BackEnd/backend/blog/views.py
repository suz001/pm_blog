from django.shortcuts import render

from rest_framework.views import APIView
 
# import the BlogSerializer from the serializer file
from blog.serializer import BlogSerializer
 
# import the Todo model from the models file
from blog.models import Blog
from rest_framework.response import Response

from rest_framework.parsers import MultiPartParser, FormParser

from rest_framework import status

# create a class for the Blog model viewsets
class BlogView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self,request,*args, **kwargs):
        queryset = Blog.objects.all()
        serializer = BlogSerializer(queryset, context={"request": 
                      request}, many=True)
        return Response(serializer.data) 
    
    def post(self,request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)
        
class BlogDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    

    def get(self,request, slug):
        queryset = Blog.objects.all()
        serializer = BlogSerializer(queryset, many=True)
        return Response(serializer.data)

    def put(self,request, slug):
        snippet = self.get_object(slug)
        serializer = BlogSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request, slug):
        snippet = self.get_object(slug)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    