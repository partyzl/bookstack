from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializers):

    class Meta:
        model = Book
        fields = ("title", "author", "cover", "page_num", "rating", "publish_year", "date_started", "date_finished")