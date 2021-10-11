from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserStats(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null= True)
    pages_per_day = models.IntegerField(default=None)
    avg_book_time = models.FloatField(default=None)
    avg_book_length = models.IntegerField(default=None)
    total_books_read = models.IntegerField(default=None)
    genres = models.JSONField(default=None)
    fav_era = models.IntegerField()

    def __str__(self):
        # user = User.objects.get(id=self.user_id)
        return f'{self.user_id} stats'