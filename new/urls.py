from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('', views.home, name="home"),
    path('about/', views.about, name='about'),
    path('blog/', views.blogs, name='blogs'),
    path('sports/', views.sports, name='sports'),
    path('body/', views.body, name="body"),
    path('index/', views.index, name="index"),
    path('article/', views.article, name="article"),
    path('article/<int:id>/', views.article_detail, name='article_detail'),
] 
