import React, { useEffect, useState } from 'react';
import Newsitem from './newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=54ae918a34c1421a9072ef9bf6e4d938`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]); // Include category in dependency array to re-fetch articles when category changes

  return (
    <div className='container'>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles && articles.map((news, index) => {
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  );
}

export default Newsboard;
