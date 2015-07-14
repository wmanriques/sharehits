from django.conf.urls import include, url
from .views import RoomPublicList, RoomUserList, RoomDetail, TagList, SongList, User_RoomList
from .views import RoomDetailView

urlpatterns = [
	url(r'^api/rooms/public/$', RoomPublicList.as_view(), name='room-list-public'),
	url(r'^api/rooms/(?P<username>[0-9a-zA-Z_-]+)/$', RoomUserList.as_view(), name='room-list-user'),
	url(r'^api/rooms/(?P<pk>[0-9]+)/$', RoomDetail.as_view()),
	url(r'^api/tags/$', TagList.as_view(), name='tag-list'),
	url(r'^api/songs/$', SongList.as_view(), name='song-list'),
	url(r'^api/userrooms/$', User_RoomList.as_view(), name='userroom-list'),


	url(r'^room/(?P<pk>[0-9]+)/$', RoomDetailView.as_view()),
]