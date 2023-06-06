from django.db import models
from django.urls import reverse
from ckeditor.fields import RichTextField

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=150)
    author = models.CharField(max_length=40)
    content=RichTextField(blank = True, null = True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    category = models.CharField(max_length=40)
    image = models.ImageField(upload_to='blog/')
  #  blogid = models.CharField
    slug = models.SlugField()  # new

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("article_detail", args=[str(self.id)])