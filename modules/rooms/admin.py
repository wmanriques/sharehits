from django.contrib import admin

from .models import Room, Song, Tag, User_Room

admin.site.register(Room)
admin.site.register(Song)
admin.site.register(Tag)
admin.site.register(User_Room)
