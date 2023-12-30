async function fetchArticles() {
    const query = `
      query {
        allArticles {
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
    `;
  
    try {
      const data = await graphqlRequest(query);
  
      console.log('Fetch Articles Response:', data);
  
      const articles = data.data.allArticles.map(article => ({
        ...article,
        expanded: false,
      }));
  
      // Process the articles as needed
      console.log('Processed Articles:', articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }
  
  // Example usage
  fetchArticles();
  