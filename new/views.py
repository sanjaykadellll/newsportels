from django.shortcuts import render



def body(request):
	return render(request,"base/body.html")

def home(request):
	return render(request,"base/home.html")

def sports(request):
	return render(request,"base/sports.html")


def about(request):
    return render(request, 'base/about.html')


def index(request):
    return render(request, 'base/index.html')



