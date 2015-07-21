# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0002_auto_20150714_2115'),
    ]

    operations = [
        migrations.RenameField(
            model_name='song',
            old_name='name',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='song',
            name='singer',
        ),
        migrations.AddField(
            model_name='song',
            name='url',
            field=models.URLField(default=datetime.datetime(2015, 7, 21, 16, 8, 1, 448782, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='song',
            name='user_room',
            field=models.ForeignKey(default=1, to='rooms.User_Room'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='song',
            name='room',
            field=models.ForeignKey(to='rooms.Room'),
        ),
    ]
