from django.contrib import admin
from .models import UserStats

# Register your models here.


class UserStatsAdmin(admin.ModelAdmin):
    list_display = (
        "pages_per_day",
        "avg_book_time",
        "avg_book_length",
        "total_books_read",
    )


admin.site.register(UserStats, UserStatsAdmin)
