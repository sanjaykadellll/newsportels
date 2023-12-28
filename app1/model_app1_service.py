from .models import *

def createService(**kwargs):
    aaaa=")0)))))))))))))))))))))))))))))))))))))))))"
    print("000000000000000000000000000000000000",aaaa)
    return aaaa




# from .model_app1 import *



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
