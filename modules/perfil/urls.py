__author__ = 'wilson'

from django.conf.urls import patterns, include, url
from .views import LoginTemplateView, DashboardTemplateView

urlpatterns = patterns('',

    url(r'^logout/$', 'modules.perfil.views.logout_view', name='auth_logout'),
    url(r'^login/$', LoginTemplateView.as_view(), name='auth_login'),
    url(r'^dashboard/$', DashboardTemplateView.as_view(), name='perfil_dashboard'),
)


