from django.shortcuts import render

from .models import Room, Song, Tag, User_Room

from rest_framework import serializers


class RoomSerializer(serializers.ModelSerializer):
	#tag = serializers.StringRelatedField(many=True)
	creator = serializers.SlugRelatedField(
        read_only=True,
        slug_field='username'
     )
	tag = serializers.SlugRelatedField(
        slug_field='tag'
     )
	#tag = serializers.HyperlinkedIdentityField('tag', view_name='tag-list')

	class Meta:
		model = Room
		fields = ('id', 'name', 'image', 'mode', 'creator', 'tag', 'date_creation')


class TagSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tag
		fields = ('id', 'name')


class SongSerializer(serializers.ModelSerializer):
	class Meta:
		model = Song
		fields = ('id', 'name', 'singer', 'room')


class UserRoomSerializer(serializers.ModelSerializer):
	user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='first_name'
     )
	class Meta:
		model = User_Room
		fields = ('id', 'user', 'room', 'mode')