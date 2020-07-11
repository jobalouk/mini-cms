from django.contrib import admin
from .models import Entry
from django.utils.text import slugify


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    list_display = (
        'date_created',
        'date_updated',
        'title',
        'excerpt',
        'author',
    )

    readonly_fields = (
        'author',
    )

    def save_model(self, request, obj, form, change):
        obj.slug = slugify(obj.title)

        if getattr(obj, 'author') is None:
            obj.author = request.user

        super().save_model(request, obj, form, change)

    def excerpt_display(self):
        return obj.excerpt
