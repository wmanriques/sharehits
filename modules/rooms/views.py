from django.http import Http404

from .models import Room, Song, Tag, User_Room
from .serializers import RoomSerializer, TagSerializer, SongSerializer, UserRoomSerializer

from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions


class RoomList(generics.ListCreateAPIView):
	queryset = Room.objects.all()
	serializer_class = RoomSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class RoomDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Room.objects.all()
	serializer_class = RoomSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TagList(generics.ListCreateAPIView):
	queryset = Tag.objects.all()
	serializer_class = TagSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TagDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Tag.objects.all()
	serializer_class = TagSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class SongList(generics.ListCreateAPIView):
	queryset = Song.objects.all()
	serializer_class = SongSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class SongDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Song.objects.all()
	serializer_class = SongSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class User_RoomList(generics.ListCreateAPIView):
	queryset = User_Room.objects.all()
	serializer_class = UserRoomSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)