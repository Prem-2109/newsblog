import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = ({ setcategory }) => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (category) => {
    setcategory(category);
    setExpanded(false);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      expand="lg"
      className="glass-effect sticky-top mb-4 animate-fade-in"
      style={{
        padding: '20px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container>
        <a
          href="#"
          className="navbar-brand fw-bold"
          style={{
            fontSize: '2rem',
            background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: '0.5px',
            textShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
          }}
        >
          NewsHub
        </a>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            {['technology', 'business', 'science', 'sports', 'entertainment'].map((category) => (
              <Nav.Link
                key={category}
                onClick={() => handleSelect(category)}
                className="nav-link-premium position-relative px-3 py-2 rounded-3"
                style={{
                  cursor: 'pointer',
                  color: '#e2e8f0',
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  textTransform: 'capitalize',
                }}
              >
                {category}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
