from .common import *
import environ
import dj_database_url

env = environ.Env()
# reading .env file
environ.Env.read_env()


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*'] #TODO: add the allowed host

# Email Backend Settings

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = env("EMAIL_HOST_USER") #TODO: Change the email and password.
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_USE_TLS = True

# Database

# https://docs.djangoproject.com/en/4.1/ref/settings/#databases
DATABASE_URL = env('DATABASE_URL')
DATABASES = {
    'default': dj_database_url.config(default=DATABASE_URL, conn_max_age=1800)
}

CORS_ALLOWED_ORIGINS = ['https://to-do-full-stack-application.vercel.app', ] # A list of origins that are authorized to make cross-site HTTP requests
