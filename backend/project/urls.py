from django.contrib import admin
from django.urls import path, include, re_path
from dj_rest_auth.registration.views import VerifyEmailView    
from allauth.account.views import confirm_email
from django.views.generic import TemplateView
from django.http import HttpResponse
import requests
from django.shortcuts import render, redirect


class AccountConfirmEmailTemplateView(TemplateView):
    template_name='verify_email.html'
    def get(self,request, *args, **kwargs):
        requests.post('http://127.0.0.1:8000/auth/registration/verify-email/', data={'key': kwargs['key']})
        return render(request, self.template_name, {})

class PasswordResetConfirmTemplateView(TemplateView):
    template_name='password_reset_confirm.html'
    def post(self,request, *args, **kwargs):
        r = requests.post('http://127.0.0.1:8000/auth/password/reset/confirm/', data={'uid': kwargs['uidb64'], 'token': kwargs['token'], 'new_password1':request.POST['password1'], 'new_password2':request.POST['password2']})
        print(r.data())
        return redirect('http://127.0.0.1:3000/')


urlpatterns = [
    path('auth/password-reset/confirm/',
        TemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password-reset-confirm'),
    # this url is used to generate email content
    re_path(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$',
        PasswordResetConfirmTemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password_reset_confirm'),
    
    path('api/', include('todo_app.api.urls')),
    path('admin/', admin.site.urls),
    #path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    path('auth/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'), #TODO: What's the functionality of this email, it's the same -> http://127.0.0.1:8000/auth/account-confirm-email/ == http://127.0.0.1:8000/auth/registration/verify-email/
    re_path(
        r'^account-confirm-email/(?P<key>[-:\w]+)/$', AccountConfirmEmailTemplateView.as_view()
        ,name='account_confirm_email',
    )
]
