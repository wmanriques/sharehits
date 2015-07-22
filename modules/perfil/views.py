from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.core.urlresolvers import reverse_lazy
from django.views.generic import TemplateView

from modules.rooms.models import Tag

from braces.views import LoginRequiredMixin


class LoginTemplateView(TemplateView):
	template_name = "login.html"


class DashboardTemplateView(LoginRequiredMixin, TemplateView):
	template_name = "dashboard.html"

	def get_context_data(self, **kwargs):
		context = super(DashboardTemplateView, self).get_context_data(**kwargs)
		
		tags = []
		for t in Tag.objects.all():
			tags.append(t.name.encode('utf8'))
		context['tags'] = tags
		return context


def logout_view(request):
	logout(request)
	return HttpResponseRedirect(reverse_lazy('auth_login'))
