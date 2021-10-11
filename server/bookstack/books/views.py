from django.shortcuts import render
from rest_framework.views import APIView, Response
from django.http import Http404
from rest_framework import status
from .models import Book, BookStats
from .serializers import BookSerializer, BookStatsSerializer
from statistics import mean


# Create your views here.
class Books(APIView):
    def get(self, request, format=None):
        # query for the most popular
        return Response()


class UserBooks(APIView):
    def get_object(self, username):
        try:
            return Book.objects.get(user_id=username)
        except Book.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        books = Book.objects.filter(user_id=username)
        serializer = BookSerializer(books)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, username, format=None):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserBooksDetail(APIView):
    def get(self, request, username, book_id, format=None):
        try:
            book = Book.objects.get(user_id=username, id=book_id)
            serializer = BookSerializer(book)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Book.DoesNotExist:
            raise Http404

    def put(self, request, username, book_id, format=None):
        book = Book.objects.get(user_id=username, id=book_id)
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
        book = Book.objects.get(user_id=username, id=book_id)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # helper funcs

    
    

    def update_count(self, book_stats):
        book_stats.count += 1
        

    def update_avg_rating(book_stats):
        book_stats.avg_rating = Books.objects.raw(
            'SELECT AVG(ALL rating) FROM book'
        )
        return book_stats
        

        
        
