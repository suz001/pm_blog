from django.test import TestCase
from .models import *
from django.test import Client

class TestBlogModels(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.new = Blog.objects.create(title="Django Testing",
        author = "Test author",
         content="Test content",
    
        category = "Test category",
        image = "blog/test1.png",
  #  blogid = models.CharField
        slug = "Test slug")
        
        
    def test_model_str1(self):
        self.assertEqual(str(self.new), "Django Testing")

    


    