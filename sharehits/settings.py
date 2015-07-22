"""
Django settings for sharehits project.

Generated by 'django-admin startproject' using Django 1.8.2.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '=0mjd*(*lx3*#uivvf_c(k-#r1&@3snh)65zpj7e@)ib$njpl8'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []
TEMPLATE_DEBUG = True


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'modules.perfil',
    'modules.rooms',
    'social.apps.django_app.default', #python social auth
    'django_extensions',
    'rest_framework',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'sharehits.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'sharehits.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

DEFAULT_CHARSET = 'utf-8'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

TEMPLATE_DIRS = (
    os.path.realpath(os.path.join(BASE_DIR, 'modules/perfil/templates/')),
    os.path.realpath(os.path.join(BASE_DIR, 'modules/room/templates/')),
)
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.realpath(os.path.join(BASE_DIR, 'media/'))

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.realpath(os.path.join(BASE_DIR, 'static')),
)


#######python social auth###################

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.core.context_processors.tz',
    'django.core.context_processors.request',
    'django.contrib.messages.context_processors.messages',
    'django.contrib.auth.context_processors.auth',
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.static",
    'social.apps.django_app.context_processors.backends',
)

AUTHENTICATION_BACKENDS = (
    #'social.backends.twitter.TwitterOAuth',
    #'django.contrib.auth.backends.ModelBackend',
    'social.backends.facebook.FacebookOAuth2',
    #'accounts.auth_backends.EmailOrUsernameBackend',
    'django.contrib.auth.backends.ModelBackend',  #important for admin auth
)

SOCIAL_AUTH_PIPELINE = (
    'social.pipeline.social_auth.social_details',
    'social.pipeline.social_auth.social_uid',
    'social.pipeline.social_auth.auth_allowed',
    'social.pipeline.social_auth.social_user',
    'social.pipeline.social_auth.associate_by_email',
    'social.pipeline.user.get_username',
    'social.pipeline.user.create_user',
    'social.pipeline.social_auth.associate_user',
    'social.pipeline.social_auth.load_extra_data',
    'social.pipeline.user.user_details',
    #'auth.pipeline.get_profile_avatar',
    #'accounts.social_auth_pipeline.get_profile_data', # custom
    #'accounts.social_auth_pipeline.get_profile_avatar', # custom
    'modules.perfil.pipeline.get_profile_picture',
)

from django.core.urlresolvers import reverse_lazy

LOGIN_URL = reverse_lazy('auth_login')
LOGOUT_URL = reverse_lazy('auth_logout')

SOCIAL_AUTH_FACEBOOK_EXTENDED_PERMISSIONS = ['email', 'user_birthday']
SOCIAL_AUTH_FACEBOOK_KEY = '1663713687194771'
SOCIAL_AUTH_FACEBOOK_SECRET = '14c790906616f7e283108cb7994fbdff'
SOCIAL_AUTH_LOGIN_REDIRECT_URL = reverse_lazy('perfil_dashboard')
