import React, { useEffect, useState } from 'react';
import Newsitem from './newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        // Use API route instead of direct News API call
        const url = `/api/news?category=${category}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          setArticles([]);
        } else {
          setArticles(data.articles || []);
        }
      } catch (err) {
        setError('Failed to load news. Please try again later.');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

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

      {loading && (
        <div className="text-center py-5">
          <div
            className="spinner-border text-light"
            role="status"
            style={{
              width: '3rem',
              height: '3rem',
              borderWidth: '0.3rem',
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-light">Loading news...</p>
        </div>
      )}

      {error && (
        <div
          className="alert alert-danger mx-auto"
          role="alert"
          style={{
            maxWidth: '600px',
            background: 'rgba(220, 38, 38, 0.1)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            color: '#fecaca',
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className='row g-4 pt-2 animate-fade-in' style={{ animationDelay: '0.2s' }}>
        {!loading && !error && articles && articles.map((news, index) => {
          return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>
    </div>
  );
}

export default Newsboard;
