from django.http import JsonResponse
from django.http import Http404
from django.core.exceptions import PermissionDenied
from django.views.generic import TemplateView, DetailView

from .models import Room, Song, Tag, User_Room
from .serializers import RoomSerializer, TagSerializer, SongSerializer, UserRoomSerializer

from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions


class RoomPublicList(generics.ListAPIView):
	"""
	Lista todas las salas publicas creadas por los usuarios.
	"""

	queryset = Room.objects.all()
	serializer_class = RoomSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

	def get_queryset(self):
		queryset = super(RoomPublicList, self).get_queryset()
		return queryset.filter(mode='PUBLIC')


class IsCreatorMixin(object):

	def dispatch(self, request, *args, **kwargs):
		if self.request.user.username == self.kwargs.get('username'):
			return super(IsCreatorMixin, self).dispatch(request, *args, **kwargs)
		else:
			return JsonResponse({'msg':'Usuario No autorizado'}, status=401)


#class RoomUserList(IsCreatorMixin, generics.ListCreateAPIView):  # in production
class RoomUserList(generics.ListCreateAPIView):  # for test
	"""
	Lista todas las salas creadas por el usuario logueado.
	"""

	queryset = Room.objects.all()
	serializer_class = RoomSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

	def get_queryset(self):
		queryset = super(RoomUserList, self).get_queryset()
		return queryset.filter(creator__username=self.kwargs.get('username'))


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

class RoomDetailView(DetailView):
	template_name = "room_detail.html"
	model = Room