from django.contrib.auth.models import User
from django.db import models
from datetime import date

# from django.db.models.deletion import SET_NULL


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=500)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    author = models.CharField(max_length=50)
    cover = models.ImageField(upload_to="covers", blank=True)
    page_num = models.IntegerField()
    genre = models.CharField(max_length=100)
    publish_year = models.IntegerField()
    rating = models.IntegerField(null=True)
    date_started = models.DateField(auto_now_add=True)
    date_finished = models.DateField(null=True)
    private = models.BooleanField(default=True)
    user_notes = models.CharField(max_length=5000, null=True, blank=True)

    def __str__(self):
        return f"{self.title} by {self.author}"


class BookStats(models.Model):
    title = models.CharField(max_length=500, null=True)
    avg_rating = models.IntegerField(null=True)
    book_count = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.title} is rated at {self.avg_rating}"
