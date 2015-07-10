from django.db import models
from django.contrib.auth.models import User


from modules.rooms.data.data import ROOM_MODES, USER_ROL_MODES


class Room(models.Model):
	name = models.CharField(max_length=50)
	image = models.URLField()
	mode = models.CharField(max_length=50, choices=ROOM_MODES)
	creator = models.ForeignKey(User)
	tag = models.ManyToManyField('Tag')
	date_creation = models.DateTimeField(auto_now_add=True)

	def __unicode__(self):
		return u"{} de {}".format(self.name, self.creator.first_name)


class Song(models.Model):
	name = models.CharField(max_length=20)
	singer = models.CharField(max_length=20)
	room = models.ForeignKey('User_Room')

	def __unicode__(self):
		return u"{} de {}".format(self.name, self.singer)


class Tag(models.Model):
	name = models.CharField(max_length=10)

	def __unicode__(self):
		return u"Etiquta: {}".format(self.name)


class User_Room(models.Model):
	user = models.ForeignKey(User)
	room = models.ForeignKey(Room)
	mode = models.CharField(max_length=50, choices=USER_ROL_MODES)

	class Meta:
		unique_together = (("user", "room"),)

	def __unicode__(self):
		return u"{}, user: {}, mode: {}".format(self.room.name, self.user.first_name, self.mode)