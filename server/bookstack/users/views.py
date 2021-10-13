from rest_framework.views import Response, APIView
from rest_framework import status
from .serializers import UserRegistrationSerializer
# Create your views here.

class UserRegistration(APIView):
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete():
        return Response()