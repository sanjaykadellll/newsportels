# app1/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('base/', views.base, name="base"),
    path('test', views.test, name="base"),
    path('', views.home, name="home"),
    path('about/', views.about, name='about'),
    path('blog/', views.blogs, name='blogs'),
    path('sports/', views.sports, name='sports'),
    path('body/', views.body, name="body"),
    path('index/', views.index, name="index"),
    path('article/', views.article, name="article"),
    path('article/<int:id>/', views.article_detail, name='article_detail'),
]
