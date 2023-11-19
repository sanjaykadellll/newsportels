componentDidMount() {
    const query_request = `query {
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
    }`;

    fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            query: query_request,
        })
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // You now have access to the data from the response
        console.log(data);

        const articles = data.data.allArticles.map((article) => ({
            ...article,
            expanded: false,
        }));

        this.setState({ articleData: articles }); // Set the state after processing the data
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}
