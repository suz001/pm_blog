from django.contrib import admin
from blog.models import Blog
# Register your models here.

class BlogAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("title","content")
 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Blog,BlogAdmin)