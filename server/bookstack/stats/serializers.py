from rest_framework import serializers
from .models import UserStats


class UserStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserStats
        fields = (
            "pages_per_day",
            "av_book_time",
            "avg_book_length",
            "total_books_read",
            "genres",
            "fav_era",
        )
