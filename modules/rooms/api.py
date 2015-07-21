from django.http import JsonResponse
from django.http import Http404
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.views.decorators.csrf import csrf_exempt

from .models import Room, Song, Tag, User_Room
from .serializers import RoomSerializer, TagSerializer, SongSerializer, UserRoomSerializer

from rest_framework import mixins
from rest_framework import generics
from rest_framework import permissions
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


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


class SongListRoom(generics.ListCreateAPIView):
	queryset = Song.objects.all()
	serializer_class = SongSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

	def get_queryset(self):
		queryset = super(SongListRoom, self).get_queryset()
		return queryset.filter(room_id=self.kwargs.get('room_id'))


class SongDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Song.objects.all()
	serializer_class = SongSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class User_RoomList(generics.ListCreateAPIView):
	queryset = User_Room.objects.all()
	serializer_class = UserRoomSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


@api_view(['POST'])
def room_create(request):
	"""
	create a new room.
	"""

	if request.method == 'POST':
		try:
			try:
				room = Room.objects.get(name=request.DATA['name'])
			except:
				room = Room()
			
			room.name = request.DATA['name']
			room.image = request.DATA['image']
			room.mode = request.DATA['mode']
			room.creator = User.objects.get(username=request.DATA['creator'])
			room.save()
			tags = request.DATA['tags']
			tags = tags.split(',')
			for tag in tags:
				tag = tag.strip()
				t = Tag.objects.get_or_create(name=tag)
				room.tag.add(t[0])
			serializer = RoomSerializer(room)
			return Response(serializer.data, status=status.HTTP_201_CREATED)
			#return JsonResponse({}, status=200)

		except Exception, e:
			print e
			return JsonResponse({}, status=500)


@api_view(['POST'])
def song_create(request):
	"""
	user in room create a song.
	"""

	if request.method == 'POST':
		print "==========="
		print request.DATA
		

		exist_user_in_room = User_Room.objects.filter(user__id=request.DATA['user_id'], room__id=request.DATA['room_id'])

		if exist_user_in_room:
			song_in_room = Song.objects.filter(title=request.DATA['song_title'], room__id=request.DATA['room_id'])
			if song_in_room:
				return JsonResponse({'msg':'Song exist in room'}, status=409)	
			else:
				song = Song(title=request.DATA['song_title'], url=request.DATA['song_url'], room=Room.objects.get(id=request.DATA['room_id']), user_room=User_Room.objects.get(user__id=request.DATA['user_id'], room__id=request.DATA['room_id']))
				song.save()
				serializer = SongSerializer(song)
				
				return Response(serializer.data, status=status.HTTP_201_CREATED)

		else:
			return JsonResponse({'msg':'User no exist in room'}, status=403)
