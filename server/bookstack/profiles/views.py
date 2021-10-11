from django.core.checks.messages import Error
from rest_framework.views import APIView, Response
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework import status
from django.http import Http404

# Create your views here.
class Profiles(APIView):
    
    def get_object(self, username):
        try:
           return Profile.objects.get(username=username)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        profile = self.get_object(username)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)        

    def post(self, request, username, format=None):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, username, format=None):
        profile = self.get_object(username)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
