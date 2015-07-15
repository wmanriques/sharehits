from django.http import JsonResponse
from django.http import Http404
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.views.generic import TemplateView, DetailView, CreateView

from .models import Room, Song, Tag, User_Room


class RoomDetailView(DetailView):
	template_name = "room_detail.html"
	model = Room