from django.db import models
from django.contrib.auth.models import User


from modules.rooms.data.data import ROOM_MODES, USER_ROL_MODES


class Room(models.Model):
	name = models.CharField(max_length=50)
	image = models.URLField()
	mode = models.CharField(max_length=50, choices=ROOM_MODES)
	user = models.ForeignKey('User_Room')
	date_creation = models.DateTimeField(auto_now_add=True)

	def __unicode__(self):
		return u"{} mode: {}".format(self.name, self.mode)


class Song(models.Model):
	name = models.CharField(max_length=20)
	singer = models.CharField(max_length=20)
	room = models.ForeignKey('User_Room')


class Tag(models.Model):
	name = models.CharField(max_length=10)


class User_Room(models.Model):
	user = models.ForeignKey(User)
	mode = models.CharField(max_length=50, choices=USER_ROL_MODES)

	def __unicode__(self):
		return u"{} mode: {}".format(self.user, self.mode)