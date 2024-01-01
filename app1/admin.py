from django.contrib import admin
from .models import *
from django.core.checks import register


# Register your models here.


admin.site.register(Category)
admin.site.register(Author)
admin.site.register(ARTICLE)
admin.site.register(signup)
