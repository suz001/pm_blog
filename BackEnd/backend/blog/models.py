from django.db import models

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=150)
    author = models.CharField(max_length=40)
    content=models.TextField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    category = models.CharField(max_length=40)
    image = models.ImageField(upload_to='blog/')

