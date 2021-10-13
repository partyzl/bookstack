from django.test import TestCase, RequestFactory, Client
from django.contrib.auth.models import User
from .models import UserStats

# Create your tests here.
"""
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    pages_per_day = models.FloatField(null=True)
    avg_book_time = models.IntegerField(null=True)
    avg_book_length = models.IntegerField(null=True)
    total_books_read = models.IntegerField(null=True)
    genres = models.JSONField(null=True)
    fav_era = models.IntegerField(null=True)
"""


class BaseTestCase(TestCase):
    @classmethod
    def setUpTestData(self):
        self.user = User.objects.create(
            username="test", email="test@test", password="testy"
        )
        self.test_stats = UserStats.objects.create(
            user_id=self.user,
            pages_per_day=5,
            avg_book_time=100,
            avg_book_length=25,
            total_books_read=10,
            genres="horror_test",
            fav_era=1990,
        )


class TestUserStatsViews(BaseTestCase):
    factory = RequestFactory()
    c = Client()

    def test_status_code_200(self):
        res = self.c.get(f"/profiles/{self.user.username}/stats")
        assert res.status_code == 200

    def test_get_user_stats(self):
        res = self.c.get(f"/profiles/{self.user.username}/stats")
        data = res.json()
        assert data[0]["user_id"] == "test"
        assert data[0]["pages_per_day"] == "5"
        assert data[0]["avg_book_time"] == "100"
        assert data[0]["avg_book_length"] == "25"
        assert data[0]["total_books_read"] == "10"
        assert data[0]["genres"] == "horror_test"
        assert data[0]["fav_era"] == 1990

    def test_update_user_stats(self):
        res = self.c.put(
            f"/profiles/{self.user.username}/stats", {"fav_era": 2000}
        )
        data = res.json()
        assert data[0]["fav_era"] == 2000
