from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout

from django.views.generic import TemplateView


class LoginTemplateView(TemplateView):
	template_name = "login.html"


def logout_view(request):
	pass
	#logout(request)
	#return HttpResponseRedirect('/')
