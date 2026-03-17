#!/bin/sh

# Make migrations and migrate the database
python manage.py makemigrations djangoapp
python manage.py migrate

# Start the server
exec "$@"