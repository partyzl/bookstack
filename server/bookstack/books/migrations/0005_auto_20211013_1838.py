# Generated by Django 3.2.8 on 2021-10-13 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_alter_book_genre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='date_finished',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='date_started',
            field=models.DateField(null=True),
        ),
    ]
