# Generated by Django 3.2.8 on 2021-10-13 20:27

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
                ('pages_per_day', models.FloatField(null=True)),
                ('avg_book_time', models.IntegerField(null=True)),
                ('avg_book_length', models.IntegerField(null=True)),
                ('total_books_read', models.IntegerField(null=True)),
                ('genres', models.JSONField(null=True)),
                ('fav_era', models.IntegerField(null=True)),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
