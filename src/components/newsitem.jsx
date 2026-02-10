import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/images/newsimage.jpg';
import '../index.css';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className='col-lg-3 col-md-4 col-12'>
            <div
                className="premium-card glass-effect overflow-hidden rounded-4 h-100"
                style={{
                    background: 'rgba(15, 23, 42, 0.4)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                        src={src ? src : image}
                        className="w-100 h-100"
                        style={{
                            objectFit: 'cover',
                            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                        }}
                        alt="News"
                    />
                    <div
                        className="position-absolute bottom-0 start-0 end-0"
                        style={{
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
                        }}
                    />
                </div>
                <div className="p-4 d-flex flex-column" style={{ flex: '1' }}>
                    <h5
                        className="mb-3"
                        style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: '#f1f5f9',
                            lineHeight: '1.5',
                            maxHeight: '3.3rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {title ? title.slice(0, 49) : "No Title"}
                    </h5>
                    <p
                        className="mb-4"
                        style={{
                            fontSize: '0.9rem',
                            color: '#cbd5e1',
                            lineHeight: '1.6',
                            maxHeight: '4.8rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {description ? description.slice(0, 90) : "Custom Description"}
                    </p>
                    <a
                        href={url}
                        className="btn w-100 fw-semibold mt-auto"
                        style={{
                            background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
                            border: 'none',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 24px rgba(168, 85, 247, 0.6)';
                            e.target.style.background = 'linear-gradient(135deg, #c084fc, #60a5fa)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 14px rgba(168, 85, 247, 0.4)';
                            e.target.style.background = 'linear-gradient(135deg, #a855f7, #3b82f6)';
                        }}
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string.isRequired
};

export default NewsItem;
