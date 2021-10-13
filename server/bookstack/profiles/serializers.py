from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    # avatar = serializers.FileField(max_length=None, use_url=True)
    class Meta:
        model = Profile
        fields = ("user_id", "avatar", "fav_character", "fav_book", "book_target")
        read_only_fields = ["avatar"]

class ProfileAvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["avatar"]
