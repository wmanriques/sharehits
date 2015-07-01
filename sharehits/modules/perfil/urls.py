__author__ = 'wilson'

from django.conf.urls import patterns, include, url
from .views import LoginTemplateView

urlpatterns = patterns('',

    url(r'^logout/$', 'apps.perfil.views.logout_view', name='auth_logout'),
    url(r'^login/$', LoginTemplateView.as_view(), name='auth_login'),
)


