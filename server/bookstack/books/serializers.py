from rest_framework import serializers
from .models import Book, BookStats


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = (
            "title",
            "author",
            "cover",
            "page_num",
            "rating",
            "publish_year",
            "date_started",
            "date_finished",
            "private"
        )


class BookStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookStats
        fields = ("avg_rating", "book_count")
