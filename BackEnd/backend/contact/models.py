from django.db import models
from phone_field import PhoneField
from django.core.mail import send_mail

class Contact(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField()
    phone = PhoneField(blank=True, help_text='Contact phone number')
    message = models.TextField()
    #created_at = models.DataTimeField(auto_now_add = True)
    def _str_(self)->str:
        return self.message

    def save(self,*args,**kwargs):
        send_mail(
            "Contact from purple melon",
            "Here is the message.",
            "cjy12312311@gmail.com",
            ['purplemelon000@gmail.com'],
            fail_silently=False,
            html_message = f'<p>{self.name}</p><p>{self.message}</p>',

        )
        return super(Contact,self).save(*args,**kwargs)
        
    class Meta:
        verbose_name_plural='Contact Queries'