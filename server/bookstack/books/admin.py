from django.contrib import admin
from .models import Book, BookStats

# Register your models here.

class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', 'title',  'author', 'page_num', 'rating')


admin.site.register(Book, BookAdmin)
admin.site.register(BookStats)