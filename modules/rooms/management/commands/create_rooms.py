import json
import os
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from modules.rooms.models import Room, Tag

rooms = json.loads(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),"rooms.json")).read())

class Command(BaseCommand):
	def handle(self, *args, **options):
		for room in rooms:
			u = User.objects.get(username=room['creator'])
			r = Room.objects.create(name=room['name'], image=room['image'], mode=room['mode'], creator=u)
			r.save()

			for tag in room['tags']:
				t = Tag.objects.create(name=tag)
				r.tag.add(t)
