# Generated by Django 3.2.8 on 2021-10-11 09:02

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
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('author', models.CharField(max_length=50)),
                ('cover', models.ImageField(upload_to='')),
                ('page_num', models.IntegerField()),
                ('rating', models.IntegerField()),
                ('publish_year', models.IntegerField()),
                ('date_started', models.IntegerField()),
                ('date_finished', models.IntegerField()),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
