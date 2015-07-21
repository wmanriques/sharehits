# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0005_auto_20150721_1731'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='room',
        ),
        migrations.AddField(
            model_name='song',
            name='room',
            field=models.ForeignKey(default=1, to='rooms.Room'),
            preserve_default=False,
        ),
    ]
