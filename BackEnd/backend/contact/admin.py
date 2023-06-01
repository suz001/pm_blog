from django.contrib import admin

from contact.models import Contact
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class

admin.site.register(Contact)
