from django.shortcuts import render
from rest_framework.views import APIView, Response
from django.http import Http404
from rest_framework import status
from .models import Book
from .serializers import BookSerializer


# Create your views here.
class Books(APIView):
    def get(self, request, format=None):
        #query for the most popular
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

    def put():

    def delete():
    

class UserBooksDetail(APIView):

    def get():
        return Response()
