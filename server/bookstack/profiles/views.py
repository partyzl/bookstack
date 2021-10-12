from django.core.checks.messages import Error
from rest_framework.views import APIView, Response
from .models import Profile
from .serializers import ProfileSerializer
from stats.serializers import UserStatsSerializer
from rest_framework import status
from django.http import Http404
from django.contrib.auth.models import User
from rest_framework.parsers import FormParser, MultiPartParser

# Create your views here.


class CreateProfile(APIView):

    parser_classes = (FormParser, MultiPartParser)

    def post(self, request, format=None):
        prof_serializer = ProfileSerializer(data=request.data["profile"])
        stats_serializer = UserStatsSerializer(data=request.data["stats"])
        if prof_serializer.is_valid():
            prof_serializer.save()
            stats_serializer.save(avatar=request.data["profile"]["avatar"])
            return Response(
                prof_serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            prof_serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )


class Profiles(APIView):
    def get_object(self, username):
        try:
            user = User.objects.get(username=username)
            return Profile.objects.get(user_id=user.id)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        profile = self.get_object(username)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, username, format=None):
        profile = self.get_object(username)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
