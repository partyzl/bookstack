from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserStats(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    pages_per_day = models.FloatField(null=True)
    avg_book_time = models.IntegerField(null=True)
    avg_book_length = models.IntegerField(null=True)
    total_books_read = models.IntegerField(null=True)
    genres = models.JSONField(null=True)
    fav_era = models.IntegerField(null=True)

    def __str__(self):
        return f"{self.user_id} stats"
