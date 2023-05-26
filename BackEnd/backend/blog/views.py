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

    def get(self,request):
        output = [{"title": output.title,
                   "content": output.content,
                   "author":output.author, 
                   "created_at":output.created_at,
                   "updated_at":output.updated_at,
                   "category": output.category,
                  }
                   for output in Blog.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)
        
class BlogDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            raise Response()

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = BlogSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = BlogSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    