from django.contrib.auth.models import User
from django.db import models
from django.db.models.deletion import SET_NULL


# Create your models here.
class Book(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=500)
    author = models.CharField(max_length=50)
    cover = models.ImageField()
    page_num = models.IntegerField()
    rating = models.IntegerField()
    publish_year = models.IntegerField()
    date_started = models.IntegerField()
    date_finished = models.IntegerField()

    def __str__(self):
        return f'{self.title} by {self.author}'



