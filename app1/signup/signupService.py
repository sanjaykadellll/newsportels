from .signupModels import *
def signupSaveService(**kwargs):
    print('signupSaveService', kwargs)
    data = kwargs.get('data')
    signupDb=None
    print("mmmmmmmmmmmmmmmmmmmmmmmmmmm",data)
    id = data.pop('id', 0)
    if id:
        id = int(id)

    markedToDelete_ = data.pop('markedToDelete_', 0)
    if id:
        signupDb = signup.objects.get(pk=id)
        if markedToDelete_:
            signupDb.delete()
            signupDb=None
        else:
            for key, value in data.items():
                setattr(signupDb, key, value)
            signupDb.save()
    else:
        signupDb = signup.objects.create(**data)
    return signupDb