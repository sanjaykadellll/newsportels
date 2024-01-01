from django.db import models

class signup(models.Model):
    firstname = models.CharField(max_length=200,blank=True, null=True)
    lastname = models.CharField(max_length=100,blank=True, null=True)
    email = models.CharField(max_length=200,blank=True, null=True)
    password = models.CharField(max_length=200,blank=True, null=True)
    confirmpassword = models.CharField(blank=True,max_length=200, null=True)
	