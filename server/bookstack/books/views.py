from django.shortcuts import render
from rest_framework.views import APIView, Response
from django.http import Http404
from rest_framework import status
from .models import Book, BookStats
from .serializers import BookSerializer, BookStatsSerializer
from statistics import mean
from django.contrib.auth.models import User


# Create your views here.
class Books(APIView):
    def get(self, request, format=None):
        # query for the most popular
        return Response()


class UserBooks(APIView):
    def get_object(self, username):
        try:
            user = User.objects.get(username=username)
            return Book.objects.get(user_id=user.id)
        except Book.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        books = self.get_object(username)
        serializer = BookSerializer(books)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, username, format=None):
        book_serializer = BookSerializer(data=request.data["book"])
        stats_serializer = BookStatsSerializer(data=request.data["stats"])
        if book_serializer.is_valid():
            book_serializer.save()
            stats_serializer.save()
            return Response(
                book_serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            book_serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )


class UserBooksDetail(APIView):
    def get_object(self, username, book_id):
        try:
            user = User.objects.get(username=username)
            return Book.objects.get(user_id=user.id, id=book_id)
        except Book.DoesNotExist:
            raise Http404

    def get(self, request, username, book_id, format=None):
        book = self.get_object(username, book_id)
        serializer = BookSerializer(book)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, book_id, format=None):
        book = self.get_object(username, book_id)
        title = book.title
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            book_stats = BookStats.objects.get(title=title)
            self.update_count(book_stats)
            self.update_avg_rating(book_stats)
            book_stats.save()

            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, username, book_id, format=None):
        book = self.get_object(username, book_id)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # helper funcs

    def update_count(self, book_stats):
        book_stats.count += 1

    def update_avg_rating(book_stats):
        book_stats.avg_rating = Books.objects.raw(
            "SELECT AVG(ALL rating) FROM book"
        )
        return book_stats
