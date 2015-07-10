from django.shortcuts import render

from .models import Room, Song, Tag

from rest_framework import serializers


class RoomSerializer(serializers.ModelSerializer):
	class Meta:
		model = Room
		fields = ('name', 'image', 'mode', 'creator', 'tag', 'date_creation')
