from rest_framework.views import APIView, Response
from django.http import Http404
from rest_framework import status
from .models import Book, BookStats
from .serializers import BookSerializer, BookStatsSerializer
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
            return Book.objects.filter(user_id=user.id)
        except Book.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        books = self.get_object(username)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, username, format=None):
        user = User.objects.get(username=username) 
        book_serializer = BookSerializer(data=request.data)

        if list(Book.objects.filter(user_id=user.id, title=request.data["title"])):
            return Response('you already have this book', status=status.HTTP_400_BAD_REQUEST)

        elif book_serializer.is_valid():
            book_serializer.save()

            if list(BookStats.objects.filter(title=book_serializer.data["title"])):
                return Response(book_serializer.data, status=status.HTTP_201_CREATED)

            stats_serializer = BookStatsSerializer(data=request.data)
            if stats_serializer.is_valid():
                stats_serializer.save()
            return Response( {"book": book_serializer.data, "book_stats": stats_serializer.data}, status=status.HTTP_201_CREATED )
        return Response(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        


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
        serializer = BookSerializer(book, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            
            if request.data["update"] == "finished_book":
                book_stats_object = BookStats.objects.get(title=title)
                current_stats = BookStatsSerializer(book_stats_object)
                update_1 = self.update_count(current_stats.data)
                update_2 = self.update_avg_rating(update_1)
                book_stats_serializer = BookStatsSerializer(book_stats_object, data=update_2)
                if book_stats_serializer.is_valid():
                    book_stats_serializer.save()
                    return Response({"book": serializer.data, "book_stats": book_stats_serializer.data})
                return Response('could not update book stats', status=status.HTTP_400_BAD_REQUEST)

            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, username, book_id, format=None):
        book = self.get_object(username, book_id)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




#------------------------------HELPER FUNCTIONS-----------------------------#

    def update_count(self, book_stats):
        book_stats["book_count"] += 1
        return book_stats

    def update_avg_rating(self, book_stats):
        queryset = list(Book.objects.raw('SELECT id, AVG(ALL rating) FROM books_book'))[0]
        avg_rating = int(queryset.__dict__["AVG(ALL rating)"])
        book_stats["avg_rating"] = round(avg_rating)
        return book_stats
