from django.urls import path
from .views import Profiles
from stats.views import Stats


urlpatterns = [
    path('<str:username>/', Profiles.as_view()),
    path('<str:username>/stats/', Stats.as_view())
]