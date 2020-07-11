from rest_framework import serializers
from .models import Entry


class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = [
            'date_created',
            'date_updated',
            'title',
            'slug',
            'content',
            'author',
            'excerpt',
            'id',
        ]
