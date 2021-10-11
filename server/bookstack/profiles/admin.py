from django.contrib import admin
from .models import Profile
# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'avatar', 'fav_character', 'fav_book', 'book_target')


admin.site.register(Profile, ProfileAdmin)