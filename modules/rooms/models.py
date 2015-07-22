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

	"""
	def save(self, *args, **kwargs):
		print self.creator.username
		print self.name
		print USER_ROL_MODES
		User_Room.objects.create(user=self.creator, room=self, mode="ADMIN")
		super(Room, self).save(*args, **kwargs)
	"""

	def __unicode__(self):
		return u"{} de {}".format(self.name, self.creator.first_name)


class Song(models.Model):
	title = models.CharField(max_length=150)
	url = models.URLField()
	room = models.ForeignKey(Room)  #una cancion si puede pertener a uno o mas rooms, no por id, sino por title
	user_room = models.ForeignKey('User_Room')  # esta enlazado a user room, porque necesito saber que usuario de que room agrego esta cancion

	def __unicode__(self):
		return u"{} en room: {}".format(self.title, self.room.name)


class Tag(models.Model):
	name = models.CharField(max_length=50)

	def __unicode__(self):
		return u"tag : {}".format(self.name)


class User_Room(models.Model):
	user = models.ForeignKey(User)
	room = models.ForeignKey(Room)
	mode = models.CharField(max_length=50, choices=USER_ROL_MODES)

	class Meta:
		unique_together = (("user", "room"),)

	def __unicode__(self):
		return u"{}, user: {}, mode: {}".format(self.room.name, self.user.first_name, self.mode)