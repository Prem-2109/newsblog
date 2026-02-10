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
    <div className='container py-5'>
      <h2
        className='text-center mb-5 animate-slide-up'
        style={{
          color: '#fff',
          fontSize: '3.5rem',
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: '700',
          letterSpacing: '1px',
        }}
      >
        Latest{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            textShadow: '0 0 40px rgba(236, 72, 153, 0.4)',
          }}
        >
          News
        </span>
      </h2>
      <div className='row g-4 pt-2 animate-fade-in' style={{ animationDelay: '0.2s' }}>
        {articles && articles.map((news, index) => {
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>
    </div>
  );
}

export default Newsboard;
