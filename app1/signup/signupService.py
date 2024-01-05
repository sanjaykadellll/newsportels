from .signupModels import signup 

def signupSaveService(**kwargs):
    print('signupSaveService', kwargs)
    data = kwargs.get('data')

    signupDb = None
    print(data)
    
    id = data.pop('id', 0)
    if id:
        id = int(id)
    action = data.pop('action', 0)
 
    if id:
        signupDb = signup.objects.get(pk=id)
        if action == 1:
            print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            signupDb.delete()
            signupDb = None
        elif action == 2: # change password
            email = data.get("email")
            emailDb = signup.objects.filter(email=email).first()
            
            if emailDb is not None:
                signupDb.password = data.get("password")
                print("||||||||||||||||||||||||", signupDb.password)
                signupDb.save()
            else:
                print("No user found with the specified email. Password not updated.")
            
            signupDb = None
  

    else:
        signupDb = signup.objects.create(**data)
    
    return signupDb
