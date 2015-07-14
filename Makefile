clean:
	rm -f db.sqlite3

create_database:
	./manage.py syncdb --noinput
	./manage.py migrate --noinput
	./manage.py createsuperuser --username=admin --email=admin@example.com

make_fixtures:
	./manage.py create_users
	./manage.py create_rooms

all: clean create_database make_fixtures