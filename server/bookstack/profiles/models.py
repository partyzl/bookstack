from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    avatar = models.ImageField(upload_to='avatars', default=None)
    fav_character = models.CharField(max_length=30, default=None)
    fav_book = models.CharField(max_length = 100, default=None)
    book_target = models.IntegerField(default=None)

    def __str__(self):
        user = User.objects.get(id = self.user_id)
        return user.username

    