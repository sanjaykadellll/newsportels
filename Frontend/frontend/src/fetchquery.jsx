// fetchArticles.jsx
const fetchArticles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/graphql', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `
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
          `,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.data.allArticles.map((article) => ({
        ...article,
        expanded: false,
      }));
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  };
  
  export default fetchArticles;
  