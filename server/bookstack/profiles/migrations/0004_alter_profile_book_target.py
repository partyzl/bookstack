# Generated by Django 3.2.8 on 2021-10-12 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_alter_profile_fav_book'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='book_target',
            field=models.IntegerField(default=None, null=True),
        ),
    ]
