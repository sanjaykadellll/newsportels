from django.contrib import admin
from .model_app1 import *
from django.core.checks import register


# Register your models here.


admin.site.register(Category)
admin.site.register(Author)
admin.site.register(Article)
