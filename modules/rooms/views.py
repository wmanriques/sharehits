from django.http import Http404

from .models import Room, Song, Tag
from .serializers import RoomSerializer

from rest_framework import mixins
from rest_framework import generics


class RoomList(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class RoomDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer