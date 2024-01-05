// fetchArticles.jsx
const fetchArticles = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8001/graphql', {
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

const SIGN_UPServiceSave = async (args) => {
  var state = args.state;

  // Create the data for the mutation
  var info = `{${!state.id ? '' : `id:${state.id},`}
              ${!state.firstname ? '' : `firstname:"${state.firstname}",`}
              ${!state.lastname ? '' : `lastname:"${state.lastname}",`}
              ${!state.email ? '' : `email:"${state.email}",`}
              ${!state.password ? '' : `password:"${state.password}",`}
              ${!state.confirmpassword ? '' : `confirmpassword:${state.confirmpassword},`}
              ${!state.action ? '' : `action:${state.action}`}}`;

  // Create the GraphQL mutation request
  var query_request = `
  mutation {
    savesignup(data: ${info}) {
      signupObj {
        id
        firstname
        lastname
        email
        password
        confirmpassword
        
      }
    }
  }
  `;

  try {
    // Make the GraphQL mutation request
    const response = await fetch('http://127.0.0.1:8001/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query_request }),
    });

    const responseData = await response.json();

    console.log("+++++++++", responseData);
    console.log("+++++++++", query_request);

    // If SIGN_UPServiceSave was successful, fetch articles
    if (!responseData.errors) {
      const articles = await fetchArticles();
      // Do something with the articles, e.g., update the UI
      console.log('Fetched articles after sign-up:', articles);
    }
  } catch (error) {
    console.log("________________________");
  }
};

const fetchSignupData = () => {
  fetch('127.0.0.1:8001/login', {
    method: 'POST', // Adjust the method based on your API
    headers: {
      'Content-Type': 'application/json',
    },
    // You can include a request body if needed
    body: JSON.stringify({ key: 'value' }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Process the received data
      // Update your frontend UI based on the data
    })
    .catch(error => console.error('Error:', error));
};


export { fetchArticles, SIGN_UPServiceSave, fetchSignupData };
