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
        model = ARTICLE

class CategoryInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    markedToDelete_ = graphene.Int()

class AuthorInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    bio = graphene.String()
    email = graphene.String()
    markedToDelete_ = graphene.Int()

class ARTICLEInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    content = graphene.String()
    pub_date = graphene.String()
    category = graphene.Int()
    author = graphene.Int()
    image = graphene.String()
    markedToDelete_ = graphene.Int()
    

class Category_SaveMutation(graphene.Mutation):
    class Arguments:
        data = CategoryInput()

    Category_Obj = graphene.Field(lambda: CategoryType)

    def mutate(self, info, data):
        dbCategory = CategorySaveService(data=data)
        return Category_SaveMutation(Category_Obj=dbCategory)


class Author_SaveMutation(graphene.Mutation):
    class Arguments:
        data = AuthorInput()

    Author_Obj = graphene.Field(lambda: AuthorType)

    def mutate(self, info, data):
        dbAuthor = AuthorSaveService(data=data)
        return Author_SaveMutation(Author_Obj=dbAuthor)




class ARTICLE_SaveMutation(graphene.Mutation):
    class Arguments:
        data = ARTICLEInput()

    ARTICLE_Obj = graphene.Field(lambda: ArticleType)

    def mutate(self, info, data):
        dbARTICLE = ARTICLESaveService(data=data)
        return ARTICLE_SaveMutation(ARTICLE_Obj=dbARTICLE)