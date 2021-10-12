from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import status
from django.contrib.auth.models import User
from books.models import Book
from .models import UserStats
from .serializers import UserStatsSerializer

import math

# Create your views here.
class Stats(APIView):

    def get_objects(self, username):
        user = User.objects.get(username=username)
        return UserStats.objects.get(user_id = user.id)

    def get(self, request, username, format=None):
        stats = self.get_objects(username)
        serializer = UserStatsSerializer(stats)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, format=None):
        stats = self.get_objects(username)

        #call user stats generation.
        self.update_user_stats(username)

        serializer = UserStatsSerializer(stats, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update_user_stats(self, username):
        finished_books = list(Book.objects.raw('SELECT * FROM Book WHERE date_finished IS NOT NULL'))#insert query for books that have a not null finished date.
        finished_total = len(finished_books)
        [reading_time, pages_read] = self.get_reading_data(finished_books)

        pages_per_day = pages_read / reading_time 
        avg_book_time = reading_time / finished_total

        genre_list = list(Book.objects.raw('SELECT genre, count(genre) FROM Book GROUP by genre'))

        #get favourite era
        publish_years = list(Book.objects.raw('SELECT publish_year FROM Book'))
        decades_list = map(self.rounding, publish_years)
        fav_era = self.most_common_decade(decades_list)



#------------------------------HELPER FUNCTIONS-----------------------------#



    def rounding(year_object):
        return math.floor(year_object / 10) * 10

    def most_common_decade(decades):
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