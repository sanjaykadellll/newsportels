import graphene
from .models import *
from .model_app1_schema import *
from app1.signup.signupSchema import *

class Query(ObjectType):
    all_categories = graphene.List(CategoryType)
    all_authors = graphene.List(AuthorType)
    all_articles = graphene.List(ArticleType)
    article = graphene.Field(ArticleType, id=graphene.Int())
    all_signup = graphene.List(signupType)
 
    def resolve_all_categories(self, info, **kwargs):
        return Category.objects.all()

    def resolve_all_authors(self, info, **kwargs):
        return Author.objects.all()

    def resolve_all_articles(self, info, **kwargs):
        return ARTICLE.objects.all()

    def resolve_article(self, info, id):
        return ARTICLE.objects.get(pk=id)

def resolve_all_signup(self, info, **kwargs):
    return signup.objects.all()



class Mutation(graphene.ObjectType):
    saveCategory = Category_SaveMutation.Field()
    saveAuthor = Author_SaveMutation.Field()
    saveARTICLE = ARTICLE_SaveMutation.Field()
    savesignup = signup_SaveMutation.Field()
  
schema = graphene.Schema(query=Query, mutation=Mutation)
