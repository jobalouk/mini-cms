from django.db import models
from django.utils import timezone
from django.template.defaultfilters import truncatechars
from ckeditor.fields import RichTextField


class Entry(models.Model):
    date_created = models.DateField('date de création', default=timezone.now)
    date_updated = models.DateField('date de mise à jour', auto_now=True)
    title = models.CharField(max_length=250)
    slug = models.SlugField('slug', default='', blank=True)
    content = RichTextField()
    author = models.CharField(max_length=100, blank=True, null=True, help_text='Automatiquement le superuser')

    class Meta:
        verbose_name = 'article'
        verbose_name_plural = 'articles'
        db_table = 'cms_entry'

    def __str__(self):
        return f'{self.date_created} {self.title}'

    @property
    def excerpt(self):
        return truncatechars(self.content, 100)
