from django.contrib.auth.models import User
from django.db import models
from django.db.models.deletion import SET_NULL


# Create your models here.
class Book(models.Model):
    book_id = models.IntegerField()
    title = models.CharField(max_length=500)
    author = models.CharField(max_length=50)
    cover = models.ImageField()
    page_num = models.IntegerField()
    publish_year = models.IntegerField()
    book_count = models.IntegerField()
    avg_rating = models.IntegerField()


class BookRating(models.Model):
    book_id = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    rating = models.IntegerField()
    date_started = models.IntegerField()
    date_finished = models.IntegerField()

    def __str__(self):
        return f"{self.title} by {self.author}"
