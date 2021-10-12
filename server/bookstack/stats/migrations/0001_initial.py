# Generated by Django 3.2.8 on 2021-10-11 16:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserStats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pages_per_day', models.IntegerField(default=None)),
                ('avg_book_time', models.FloatField(default=None)),
                ('avg_book_length', models.IntegerField(default=None)),
                ('total_books_read', models.IntegerField(default=None)),
                ('genres', models.JSONField(default=None)),
                ('fav_era', models.IntegerField()),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]