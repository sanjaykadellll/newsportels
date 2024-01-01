from .models import *
from django.shortcuts import render

def AuthorSaveService(**kwargs):
    print('AuthorSaveService', kwargs)
    data = kwargs.get('data')
    AuthorDb=None
    
    id = data.pop('id', 0)
    if id:
        id = int(id)

    markedToDelete_ = data.pop('markedToDelete_', 0)
    if id:
        AuthorDb = Author.objects.get(pk=id)
        if markedToDelete_:
            AuthorDb.delete()
            AuthorDb=None
        else:
            for key, value in data.items():
                setattr(AuthorDb, key, value)
            AuthorDb.save()
    else:
        AuthorDb = Author.objects.create(**data)
    return AuthorDb


def CategorySaveService(**kwargs):
    print('CategorySaveService', kwargs)
    data = kwargs.get('data')
    CategoryDb=None
    
    id = data.pop('id', 0)
    if id:
        id = int(id)

    markedToDelete_ = data.pop('markedToDelete_', 0)
    if id:
        CategoryDb = Category.objects.get(pk=id)
        if markedToDelete_:
            CategoryDb.delete()
            CategoryDb=None
        else:
            for key, value in data.items():
                setattr(CategoryDb, key, value)
            CategoryDb.save()
    else:
        CategoryDb = Category.objects.create(**data)
    return CategoryDb


def ARTICLESaveService(**kwargs):
    print('ARTICLESaveService', kwargs)
    data = kwargs.get('data')
    ARTICLEDb=None
    
    id = data.pop('id', 0)
    if id:
        id = int(id)

    markedToDelete_ = data.pop('markedToDelete_', 0)
    if id:
        ARTICLEDb = ARTICLE.objects.get(pk=id)
        if markedToDelete_:
            ARTICLEDb.delete()
            ARTICLEDb=None
        else:
            for key, value in data.items():
                setattr(ARTICLEDb, key, value)
            ARTICLEDb.save()
    else:
        ARTICLEDb = ARTICLE.objects.create(**data)
    return ARTICLEDb













# from django.http import JsonResponse
# from django.core.serializers import serialize

# def createService(**data):
#     print("Creating service with data:", **data)
    # newdata = data.get('title')
    # print (f'+++++++{newdata}___________________=+')
    # # if newdata == "xxx":
    #     Authordb = Author.objects.get(id=12)
    #     Authordb.title = 'this is correct way'
    #     Authordb.save()

    # new = f'new {newdata} is good one'
    # print("ooooooooooooooooo",new)




# def EmployerSaveService(**kwargs):
#     print("EmployerSaveService",kwargs)
#     data=kwargs.get("data")
#     markedToDelete_ = data.get("markedToDelete_",0)
#     id=data.get("id",0)
#     if id:

#         #dbemployer = Employer.objects.get(pk=id)
#         #dbemployer.name = name
#         #dbemployer.address = address
#         #dbemployer.save()
#         q=Employer.objects.filter(pk=id)
#         if markedToDelete_ :
#             dbemployer=q.first()
#             dbemployer.delete()
#         q.update(**data)
#         dbemployer=q.first()
#         return dbemployer
    
#     Employers = Employer.objects.create(**data)
#     return  Employers
