// index.jsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

// const MyComponent = () => {
//   const [articleData, setArticleData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const articles = await fetchArticles();
//         setArticleData(articles);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading data: {error.message}</div>;
//   }

//   return (
//     <div className="container">
//       <h1>Article List</h1>
//       <div className="article-list">
//         {articleData.map((article) => (
//           <div key={article.id} className="article-item">
//             <h2>{article.title}</h2>
//             <img src={article.image} alt={article.title} />
//             <p>{article.content}</p>
//             <p>Author: {article.author.name} ({article.author.email})</p>
//             <p>Category: {article.category.name}</p>
//             <p>Published on: {article.pubDate}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

createRoot(document.getElementById('root')).render(
<I18nextProvider i18n={i18n}>
    
        <App />
     
    </I18nextProvider>
);
