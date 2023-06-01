from django.shortcuts import render
from django.core.mail import send_mail
from rest_framework import generics
from contact.serializer import ContactSerializer
from contact.models import Contact

class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer