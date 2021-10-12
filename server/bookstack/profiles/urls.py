from django.urls import path
from .views import Profiles, CreateProfile
from stats.views import Stats
from books.views import UserBooks, UserBooksDetail


urlpatterns = [
    path('', CreateProfile.as_view()),
    path('<str:username>/', Profiles.as_view()),
    path('<str:username>/stats/', Stats.as_view()),
    path('<str:username>/books/', UserBooks.as_view()),
    path('<str:username>/books/<int:book_id>', UserBooksDetail.as_view())
]