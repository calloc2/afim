"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
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
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterUserView
from users.views import UserProfileView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', obtain_auth_token, name='api_login'),
    path('api/users/register/', RegisterUserView.as_view(), name='api_register'),
    path('api/users/', include('users.urls')),
]

urlpatterns += [
    path('api/users/profile/', UserProfileView.as_view(), name='user_profile'),
    path('api/users/profile/<str:username>/', UserProfileView.as_view(), name='user_profile_detail'),
]
