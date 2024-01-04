# myproject/urls.py
from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls.static import static
from . import views
# from .views import get_user_data



urlpatterns = [
    path('admin/', admin.site.urls),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('app1', include('app1.urls')), 
    path('account/', include('allauth.urls')),
    path('', views.mainpage, name='blogs'),
    # path('users/<str:username>/', get_user_data, name='get_user_data'),
    # path('login', views.get_signup_data, name='get_signup_data'),

 
] 
