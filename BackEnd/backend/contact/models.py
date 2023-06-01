from django.db import models
from phone_field import PhoneField


class Contact(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField()
    phone = PhoneField(blank=True, help_text='Contact phone number')
    message = models.TextField()
    #created_at = models.DataTimeField(auto_now_add = True)
    def _str_(self)->str:
        return self.message_txt
    
    class Meta:
        verbose_name_plural='l7. Contact Queries'