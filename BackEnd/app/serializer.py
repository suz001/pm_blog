from rest_framework import serializers
from app.models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['title']