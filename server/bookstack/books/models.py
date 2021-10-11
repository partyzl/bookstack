from django.contrib.auth.models import User
from django.db import models
from django.db.models.deletion import SET_NULL


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=500)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    author = models.CharField(max_length=50)
    cover = models.ImageField()
    page_num = models.IntegerField()
    publish_year = models.IntegerField()
    rating = models.IntegerField()
    date_started = models.IntegerField()
    date_finished = models.IntegerField()
    private = models.BooleanField(default=True)
    notes = models.CharField(default=None, max_length=5000)

    def __str__(self):
        return f"{self.title} by {self.author}"


class BookStats(models.Model):
    title = models.ForeignKey(Book, on_delete=SET_NULL, null=True)
    avg_rating = models.IntegerField()
    book_count = models.IntegerField()

    def __str__(self):
        return f"{self.title} is rated at {self.rating}"
