from django.db import models
from django.contrib.auth.models import User

"""
class UserProfile(models.Model):
    
    user = models.OneToOneField(User)
    profile_photo = models.ImageField(upload_to='profiles')
    
    def __unicode__(self):
        return u"{} profile".format(self.user)
"""