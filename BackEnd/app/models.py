from django.db import models

# Create your models here.
class React(models.Model):
    title = models.CharField(max_length=10)
    #content = models.TextField(blank = True)