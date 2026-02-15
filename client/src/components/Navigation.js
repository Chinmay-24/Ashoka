import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  
  const pages = [
    { path: '/', label: 'Home' },
    { path: '/problem', label: 'Problem' },
    { path: '/solution', label: 'Solution' },
    { path: '/features', label: 'Features' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/technology', label: 'Technology' },
    { path: '/impact', label: 'Impact' },
    { path: '/app', label: 'Launch App' }
  ];

  return (
    <nav className="presentation-nav">
      <div className="nav-brand">Ashoka</div>
      <div className="nav-links">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className={`nav-link ${location.pathname === page.path ? 'active' : ''}`}
          >
            {page.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
