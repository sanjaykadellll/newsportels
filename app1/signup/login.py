from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .signupModels import signup

@csrf_exempt  # You might want to remove this decorator in production and handle CSRF properly
def get_signup_data(request):
    if request.method == 'GET':
        # Assuming you have a model named 'Signup'
        signup_data = signup.objects.all().values()
        return JsonResponse(list(signup_data), safe=False)
