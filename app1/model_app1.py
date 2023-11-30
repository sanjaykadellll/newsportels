from django.db import models

class Category(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly set the id field as the primary key
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class Author(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    bio = models.TextField()
    email = models.EmailField()

    def __str__(self):
        return self.name

class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/image/', null=True, blank=True)

    def __str__(self):
        return self.title
