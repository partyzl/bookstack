# Generated by Django 3.2.8 on 2021-10-13 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userstats',
            name='pages_per_day',
            field=models.FloatField(null=True),
        ),
    ]