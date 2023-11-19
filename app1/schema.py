import graphene
from .models import *
from .model_app1_schema import *

# class Query(graphene.ObjectType):
#     Employers = graphene.List(EmployerType)

#     def resolve_Employers(self, info, **kwargs):
#         return Employer.objects.all()

# class Mutation(graphene.ObjectType):
#     create_employer = Create_EmployerMutation.Field()
#     update_employer = Update_EmployerMutation.Field()
#     delete_employer = Delete_EmployerMutation.Field()
#     save_employer   =  Save_EmployerMutation.Field()

# schema = graphene.Schema(query=Query, mutation=Mutation)
class Query(ObjectType):
    all_categories = graphene.List(CategoryType)
    all_authors = graphene.List(AuthorType)
    all_articles = graphene.List(ArticleType)
    article = graphene.Field(ArticleType, id=graphene.Int())

    def resolve_all_categories(self, info, **kwargs):
        return Category.objects.all()

    def resolve_all_authors(self, info, **kwargs):
        return Author.objects.all()

    def resolve_all_articles(self, info, **kwargs):
        return Article.objects.all()

    def resolve_article(self, info, id):
        return Article.objects.get(pk=id)


class Mutation(graphene.ObjectType):
    create_category = CreateCategory.Field()
    update_category = UpdateCategory.Field()
    delete_category = DeleteCategory.Field()

    create_author = CreateAuthor.Field()
    update_author = UpdateAuthor.Field()
    delete_author = DeleteAuthor.Field()

    create_article = CreateArticle.Field()
    update_article = UpdateArticle.Field()
    delete_article = DeleteArticle.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
