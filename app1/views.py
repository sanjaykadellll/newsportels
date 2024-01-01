from django.shortcuts import render
from app1.models import ARTICLE
from django.shortcuts import render , get_object_or_404



# Create your views here.
# def react(request):
# 	return render(request,"index.html")


def test(request):
	return render(request,"base/test/curd.html")


def body(request):
	return render(request,"base/body.html")

def base(request):
	return render(request,"base/home/base.html")


def home(request):
	return render(request,"base/article/home.html")

def sports(request):
	return render(request,"base/article/sports.html")

def blogs(request):
	return render(request,"base/article/blog.html")


def about(request):
    return render(request, 'base/about.html')


def index(request):
    return render(request, 'base/home/index.html')

def article(request):
	return render(request,'base/article/article.html')

def article_detail(request, id):
    # Use get_object_or_404 to retrieve the article or return a 404 response if not found
    article = get_object_or_404(ARTICLE, id=id)
    print(article.content)

    return render(request, 'base/article/article.html', {'article': article})