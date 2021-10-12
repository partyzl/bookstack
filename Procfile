web: gunicorn server/bookstack/bookstack.wsgi
release: python server/bookstack/bookstack/manage.py makemigrations -noinput
release: python server/bookstack/bookstack/manage.py migrate -noinput