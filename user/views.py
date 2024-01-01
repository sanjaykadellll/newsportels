from django.http import HttpResponse
from app1.models import *



# def showdata(request, **kwargs):
#     Articledb = Article.objects.all()
#     print("___________", Articledb)
    
#     # Replace this with your desired HTML template or response content
#     response_content = "<h1>Article Data</h1>"
#     for article in Articledb:
#         response_content += f"<p>{article.title}: {article.content}</p>"

#     return HttpResponse(response_content)
