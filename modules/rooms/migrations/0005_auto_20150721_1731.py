# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0004_auto_20150721_1610'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='room',
        ),
        migrations.AddField(
            model_name='song',
            name='room',
            field=models.ManyToManyField(to='rooms.Room'),
        ),
    ]
