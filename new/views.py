from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize
from app1.signup.signupModels import signup


def mainpage(request):
	return render(request,"base/test/login.html")


@csrf_exempt
def get_signup_data(request):
    data = serialize('json', signup.objects.all())
    return JsonResponse({'data': data}, safe=False)



# @csrf_exempt  
# def get_signup_data(request):
#     if request.method == 'GET':
#         signup_data = signup.objects.all().values()
#         return JsonResponse(list(signup_data), safe=False)
