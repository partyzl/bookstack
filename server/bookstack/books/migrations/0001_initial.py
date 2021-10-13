# Generated by Django 3.2.8 on 2021-10-13 09:13

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
            name='BookStats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500, null=True)),
                ('avg_rating', models.IntegerField(null=True)),
                ('book_count', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('author', models.CharField(max_length=50)),
                ('cover', models.ImageField(blank=True, upload_to='covers')),
                ('page_num', models.IntegerField()),
                ('genre', models.CharField(max_length=100)),
                ('publish_year', models.IntegerField()),
                ('rating', models.IntegerField(null=True)),
                ('date_started', models.DateField(null=True)),
                ('date_finished', models.DateField(null=True)),
                ('private', models.BooleanField(default=False)),
                ('user_notes', models.CharField(blank=True, max_length=5000, null=True)),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
