import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from .models import *
from .model_app1_service import *

# Define GraphQL types for your models
class CategoryType(DjangoObjectType):
    class Meta:
        model = Category

class AuthorType(DjangoObjectType):
    class Meta:
        model = Author

class ArticleType(DjangoObjectType):
    class Meta:
        model = Article

class CategoryInput(graphene.InputObjectType):
    name = graphene.String()
    description = graphene.String()

class AuthorInput(graphene.InputObjectType):
    name = graphene.String()
    bio = graphene.String()
    email = graphene.String()

class ArticleInput(graphene.InputObjectType):
    title = graphene.String()
    content = graphene.String()
    category_id = graphene.Int()
    author_id = graphene.Int()
    image = graphene.String()

# Define GraphQL mutations
class CreateCategory(graphene.Mutation):
    class Arguments:
        data = CategoryInput()

    category = graphene.Field(CategoryType)

    def mutate(self, info, data):
        print("hello")
        # Assuming Category model is defined and imported
        category = Category(**data)
        
        # Assuming createService is a placeholder for some functionality
        createService(**data)

        category.save()
        return CreateCategory(category=category)

class UpdateCategory(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        data = CategoryInput()

    category = graphene.Field(CategoryType)

    def mutate(self, info, id, data):
        category = Category.objects.get(pk=id)
        for attr, value in data.items():
            setattr(category, attr, value)
        category.save()
        return UpdateCategory(category=category)

class DeleteCategory(graphene.Mutation):
    class Arguments:
        id = graphene.Int()

    category = graphene.Field(CategoryType)

    def mutate(self, info, id):
        category = Category.objects.get(pk=id)
        category.delete()
        return DeleteCategory(category=None)

class CreateAuthor(graphene.Mutation):
    class Arguments:
        data = AuthorInput()

    author = graphene.Field(AuthorType)

    def mutate(self, info, data):
        author = Author(**data)
        author.save()
        return CreateAuthor(author=author)

class UpdateAuthor(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        data = AuthorInput()

    author = graphene.Field(AuthorType)

    def mutate(self, info, id, data):
        author = Author.objects.get(pk=id)
        for attr, value in data.items():
            setattr(author, attr, value)
        author.save()
        return UpdateAuthor(author=author)

class DeleteAuthor(graphene.Mutation):
    class Arguments:
        id = graphene.Int()

    author = graphene.Field(AuthorType)

    def mutate(self, info, id):
        author = Author.objects.get(pk=id)
        author.delete()
        return DeleteAuthor(author=None)

class CreateArticle(graphene.Mutation):
    class Arguments:
        data = ArticleInput()

    article = graphene.Field(ArticleType)

    def mutate(self, info, data):
        article = Article(**data)
        article.save()
        return CreateArticle(article=article)

class UpdateArticle(graphene.Mutation):
    class Arguments:
        id = graphene.Int()
        data = ArticleInput()

    article = graphene.Field(ArticleType)

    def mutate(self, info, id, data):
        article = Article.objects.get(pk=id)
        for attr, value in data.items():
            setattr(article, attr, value)
        article.save()
        return UpdateArticle(article=article)

class DeleteArticle(graphene.Mutation):
    class Arguments:
        id = graphene.Int()

    article = graphene.Field(ArticleType)

    def mutate(self, info, id):
        article = Article.objects.get(pk=id)
        article.delete()
        return DeleteArticle(article=None)
