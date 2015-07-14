from django.conf.urls import include, url
from .views import RoomPublicList, RoomDetail, TagList, SongList, User_RoomList

urlpatterns = [
	url(r'^api/rooms/public/$', RoomPublicList.as_view(), name='room-list'),
	url(r'^api/rooms/(?P<pk>[0-9]+)/$', RoomDetail.as_view()),
	url(r'^api/tags/$', TagList.as_view(), name='tag-list'),
	url(r'^api/songs/$', SongList.as_view(), name='song-list'),
	url(r'^api/userrooms/$', User_RoomList.as_view(), name='userroom-list'),
]