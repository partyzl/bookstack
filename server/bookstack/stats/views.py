from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import status
from django.contrib.auth.models import User
from books.models import Book
from .models import UserStats
from .serializers import UserStatsSerializer
from rest_framework.permissions import IsAuthenticated

import json
import math

# Create your views here.
class Stats(APIView):
    Permission_classes = [IsAuthenticated]

    def get_objects(self, username):
        user = User.objects.get(username=username)
        return UserStats.objects.get(user_id=user.id)

    def get(self, request, username, format=None):
        stats = self.get_objects(username)
        serializer = UserStatsSerializer(stats)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, format=None):
        stats = self.get_objects(username)
        user_id = stats.__dict__["user_id_id"]
        updated_user_stats = self.update_user_stats(user_id)

        serializer = UserStatsSerializer(stats, data=updated_user_stats)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # ------------------------------HELPER FUNCTIONS-----------------------------#
    def update_user_stats(self, user_id):
        print(user_id)
        finished_books = list(
            Book.objects.raw(
                "SELECT * FROM books_book WHERE date_finished IS NOT NULL AND user_id_id IS %s",
                [user_id],
            )
        )  # insert query for books that have a not null finished date.
        finished_total = len(finished_books)
        [reading_time, pages_read] = self.get_reading_data(finished_books)
        print(reading_time)
        avg_book_length = round(pages_read / finished_total)
        print(avg_book_length)
        pages_per_day = round(pages_read / reading_time, 1)
        avg_book_time = round(reading_time / finished_total)

        genre_list = list(
            Book.objects.raw(
                "SELECT id, genre, count(genre) FROM books_book GROUP by genre ORDER BY count(genre) DESC LIMIT 1"
            )
        )
        fav_genre = genre_list[0].__dict__["genre"]

        publish_years = list(
            Book.objects.raw("SELECT id, publish_year FROM books_book")
        )
        decades_list = list(map(self.rounding, publish_years))
        fav_era = self.most_common_decade(decades_list)

        return {
            "pages_per_day": pages_per_day,
            "avg_book_time": avg_book_time,
            "avg_book_length": avg_book_length,
            "total_books_read": finished_total,
            "fav_era": fav_era,
            "genres": fav_genre,
        }

    def rounding(self, year_object):
        year = year_object.__dict__["publish_year"]
        return math.floor(year / 10) * 10

    def most_common_decade(self, decades):
        counter = 0
        decade = decades[0]
        for i in decades:
            current_decade = decades.count(i)
            if current_decade > counter:
                counter = current_decade
                decade = i
        return decade

    def get_reading_data(self, book_list):
        total_days = 0
        total_pages = 0
        for book in book_list:
            difference = book.date_finished - book.date_started
            total_pages += book.page_num
            total_days += difference.days
        return total_days, total_pages
