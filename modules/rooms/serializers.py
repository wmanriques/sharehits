from django.shortcuts import render

from .models import Room, Song, Tag, User_Room

from rest_framework import serializers

class TagSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tag
		fields = ('id', 'name')
		

class RoomSerializer(serializers.ModelSerializer):
	#tag = serializers.StringRelatedField(many=True)
	creator = serializers.SlugRelatedField(
        read_only=True,
        slug_field='username'
     )
	#tag = serializers.StringRelatedField(many=True)
	tag = TagSerializer(many=True, read_only=True)
	#tag = serializers.HyperlinkedRelatedField('tag', view_name='api-tag-list', many=True, read_only=True)
	#tag = serializers.HyperlinkedIdentityField('tag', view_name='api-tag-list', many=True, read_only=True)

	class Meta:
		model = Room
		fields = ('url', 'id', 'name', 'image', 'mode', 'creator', 'tag', 'date_creation')


class SongSerializer(serializers.ModelSerializer):
	class Meta:
		model = Song
		fields = ('id', 'title', 'url', 'room', 'user_room')


class UserRoomSerializer(serializers.ModelSerializer):
	user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='username'
     )
	class Meta:
		model = User_Room
		fields = ('id', 'user', 'room', 'mode')