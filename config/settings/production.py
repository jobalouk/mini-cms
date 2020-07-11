from .common import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    'claurian.herokuapp.com',
]

CORS_ORIGIN_WHITELIST = [
    'http://claurian.herokuapp.com',
    'https://serene-wilson-678825.netlify.app',
]
