from django.contrib.auth.models import User
from django.http import response
from django.test import RequestFactory, TestCase

from .views import CreateProfile, Profiles

"""
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    avatar = models.ImageField(upload_to='avatars', blank=True)
    fav_character = models.CharField(max_length=30, null=True)
    fav_book = models.CharField(max_length = 100, null=True)
    book_target = models.IntegerField( null=True)
"""

# Create your tests here.
class BaseTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username="test", email="test@test", password="testpass"
        )
        self.profile = CreateProfile.post(
            user_id=self.user.username,
            avatar="",
            fav_character="Draco Malfoy",
            fav_quote="Well ofcourse this is all in your head, but why should that mean its not real",
            book_target=2,
        )


class TestUserProfile(BaseTestCase):
    def test_details(self):
        req = self.factory.get("/test")
        req.user = self.user

        response = Profiles.as_view()(req)
        self.assertEqual(response.status_code, 200)

    def test_create_profile(self):
        Hugo = User.objects.create(
            username="Hugo",
            email="tester@tester.com",
            password="hi_im_test",
        )
        self.assertEqual(Hugo.pk, 2)

    def test_update_profile(self):
        Updated = Profiles.put(fav_character="Luna Lovegood")
        self.assertEqual(response.status_code, 202)

        req = self.factory.get("/test")
        assert req.profile["fav_character"] == "Luna Lovegood"
