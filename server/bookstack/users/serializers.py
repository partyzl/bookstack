from rest_framework import serializers
from django.contrib.auth.models import User


class UserRegistration(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password", "password_confirmation")
        write_only_fields = ('password', 'password_confirmation')
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email = validated_data['email']
        )
        password=validated_data['password']
        password_confirmation=validated_data['password_confirmation']

        if password != password_confirmation:
            raise serializers.ValidationError({'password': "Your passwords don't match!"})
        user.set_password(password)
        user.save()

        return user
