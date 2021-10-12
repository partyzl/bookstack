from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import status
from django.contrib.auth.models import User
from books.models import Book
from .models import UserStats
from .serializers import UserStatsSerializer


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
        self.generate_user_stats(username)

        serializer = UserStatsSerializer(stats, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def generate_user_stats(self, username):
        #get the total reading time of books
        finished_books = list(Book.objects.filter())#insert query for books that have a not null finished date.
        finished_total = len(finished_books)
        [reading_time, pages_read] = self.get_reading_data(finished_books)

        #get total pages read and divide by total reading time in days
        pages_per_day = pages_read / reading_time 
        
        #get total reading time and divide by books read
        avg_book_time = reading_time / finished_total

        #get total number of books with finished date

        #count the books of each genre and divide each number by the total number of books.

        #get each publish date and round down to decade. count frequency of decades and select largest.
        return

    def get_reading_data(self, book_list):
        # get all books where there is a finished date
        # for each get number of days between dates
        # add days to daycount
        total_days = 0
        total_pages = 0
        for book in book_list:
            #days = #get days
            total_pages += book.page_num
            total_days += days
        return total_days, total_pages
