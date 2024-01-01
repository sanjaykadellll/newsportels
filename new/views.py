from django.shortcuts import render


def mainpage(request):
	return render(request,"base/test/login.html")
