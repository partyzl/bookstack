# Generated by Django 3.2.8 on 2021-10-12 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_alter_profile_book_target'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='book_target',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='fav_book',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='fav_character',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
