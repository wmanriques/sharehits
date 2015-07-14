from django.core.management.base import BaseCommand

from django.contrib.auth.models import User
from modules.perfil.models import UserProfile

avatar="http://www.gravatar.com/avatar/19584024795d698130c028ece20867b1?s=120&amp;d=monsterid"
users = [{'username':'alexander', 'first_name':'Alexander','last_name':'Fleming'},{'username':'wilson', 'first_name':'Wilson','last_name':'Mejia'},{'username':'z3rox', 'first_name':'Albert','last_name':'Einsten'}]

class Command(BaseCommand):
    def handle(self, *args, **options):
        for user in users:
            username = user['username'].lower()
            u = User.objects.create(username=username, email="{}@example.com".format(username), first_name=user['first_name'], last_name=user['last_name'])
            UserProfile.objects.create(user=u, photo=avatar)
