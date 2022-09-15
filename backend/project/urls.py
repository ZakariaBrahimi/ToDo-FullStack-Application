"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from dj_rest_auth.registration.views import VerifyEmailView    
from allauth.account.views import confirm_email
from django.views.generic import TemplateView
from django.http import HttpResponse
import requests
from django.shortcuts import render


class CustomTemplateView(TemplateView):
    template_name='verify_email.html'
    def get(self,request, *args, **kwargs):
        requests.post('http://127.0.0.1:8000/auth/registration/verify-email/', data={'key': kwargs['key']})
        return render(request, self.template_name, {})

urlpatterns = [
    path('api/', include('todo_app.api.urls', namespace='api')),
    path('admin/', admin.site.urls),
    #path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    path('auth/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'), #TODO: What's the functionality of this email, it's the same -> http://127.0.0.1:8000/auth/account-confirm-email/ == http://127.0.0.1:8000/auth/registration/verify-email/
    re_path(
        r'^account-confirm-email/(?P<key>[-:\w]+)/$', CustomTemplateView.as_view()
        ,name='account_confirm_email',
    )
]
