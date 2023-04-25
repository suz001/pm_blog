from django.shortcuts import render
from rest_framework.views import APIView
from app.models import *
from rest_framework.response import Response
from app.serializer import ReactSerializer

# Create your views here.
class ReactView(APIView):
    def get(self,request):
        output = [{"title":output.title
                     }
                    for output in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        