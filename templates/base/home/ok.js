// Import React at the beginning of your file
import React from 'react';

// Define a functional component using JSX
const MyComponent = () => {
  // JSX code goes here
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a basic example of JSX code.</p>
    </div>
  );
};

// Render the component
ReactDOM.render(<MyComponent />, document.getElementById('root'));
