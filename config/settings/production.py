from .common import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    # Maybe not that host when deployed on netlify
    'claurian.herokuapp.com',
]

CORS_ORIGIN_WHITELIST = [
    'http://claurian.herokuapp.com',
]
