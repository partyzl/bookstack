from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import status
from django.contrib.auth.models import User
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
        serializer = UserStatsSerializer(stats, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)