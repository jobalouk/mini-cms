from django.shortcuts import render
from .models import Entry
from .serializers import EntrySerializer
from rest_framework.generics import RetrieveAPIView, ListAPIView


# def index(request):
#     entries = Entry.objects.all()
#     context = {'entries': entries}
#     return render(request, 'cms/index.html', context)
#
#
# def entry(request, slug):
#     entry = Entry.objects.get(slug=slug)
#     context = {'entry': entry}
#     return render(request, 'cms/entry.html', context)


class EntryAPIView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer


class ListEntryAPIView(ListAPIView):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
