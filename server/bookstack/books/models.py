from django.contrib.auth.models import User
from django.db import models
from datetime import date
# from django.db.models.deletion import SET_NULL


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=500)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    author = models.CharField(max_length=50)
    cover = models.ImageField()
    page_num = models.IntegerField()
    genre = models.CharField(max_length=100)
    publish_year = models.IntegerField()
    rating = models.IntegerField()
    date_started = models.DateField(default=date.time())
    date_finished = models.DateField()
    private = models.BooleanField(default=True)
    user_notes = models.CharField(max_length=5000, null=True, blank=True)

    def __str__(self):
        return f"{self.title} by {self.author}"


class BookStats(models.Model):
    title = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    avg_rating = models.IntegerField()
    book_count = models.IntegerField()

    def __str__(self):
        return f"{self.title} is rated at {self.rating}"