from django.conf.urls import include, url
from .api import RoomPublicList, RoomUserList, RoomDetail, TagList, SongListRoom, User_RoomList
from .views import RoomDetailView
from modules.rooms import api

urlpatterns = [
	url(r'^api/rooms/public/$', RoomPublicList.as_view(), name='api-room-list-public'),
	url(r'^api/rooms/(?P<username>[0-9a-zA-Z_-]+)/$', RoomUserList.as_view(), name='api-room-list-user'),
	#url(r'^api/room/(?P<pk>[0-9]+)/$', RoomDetail.as_view()),
	url(r'^api/room/new/', api.room_create, name='api-room-create'),
	url(r'^api/tags/$', TagList.as_view(), name='api-tag-list'),
	url(r'^api/songs/room/(?P<room_id>[0-9]+)/$', SongListRoom.as_view(), name='api-song-room-list'),
	#url(r'^api/songs/$', SongList.as_view(), name='api-song-list'),
	url(r'^api/userrooms/$', User_RoomList.as_view(), name='api-userroom-list'),


	url(r'^room/(?P<pk>[0-9]+)/$', RoomDetailView.as_view(), name='room-detail'),
]