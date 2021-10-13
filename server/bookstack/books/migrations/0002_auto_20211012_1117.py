# Generated by Django 3.2.8 on 2021-10-12 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='genre',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='book',
            name='date_finished',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='book',
            name='date_started',
            field=models.DateField(auto_now_add=True),
        ),
    ]