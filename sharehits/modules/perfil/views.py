from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.core.urlresolvers import reverse_lazy
from django.views.generic import TemplateView


class LoginTemplateView(TemplateView):
	template_name = "login.html"


class DashboardTemplateView(TemplateView):
	template_name = "dashboard.html"


def logout_view(request):
	logout(request)
	return HttpResponseRedirect(reverse_lazy('auth_login'))
