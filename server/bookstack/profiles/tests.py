from django.contrib.auth.models import User
from django.test import RequestFactory, TestCase

from .views import CreateProfile, Profiles

# Create your tests here.
class BaseTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username="test", email="test@test", password="testpass"
        )


class TestUserProfile(BaseTestCase):
    def test_details(self):
        req = self.factory.get("/test")
        req.user = self.user

        response = Profiles.as_view()(req)
        self.assertEqual(response.status_code, 200)

    def test_create_profile(self):
        Hugo = User.objects.create(username="test_user2")
