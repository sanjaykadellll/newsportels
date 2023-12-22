for mutation 

mutation {
  createArticle(data: {
    title: "New single Article"
    content: "ok boys how you doing "
    categoryId: 2 
    authorId: 2   
   
  }) {
    article {
      id
      title
      content
      pubDate
      category {
        name
      }
      author {
        name
        email
      }
      image
    }
  }
}

