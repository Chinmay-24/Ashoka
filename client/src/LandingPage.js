import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="logo-icon">🛣️</span> Ashoka
          </h1>
          <p className="hero-subtitle">Real-Time Road Hazard Reporting System</p>
          <p className="hero-tagline">Empowering Drivers with Live Road Safety Information</p>
          <button className="cta-button" onClick={onGetStarted}>
            Get Started →
          </button>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <h2>About Ashoka</h2>
          <p className="about-text">
            Ashoka is a web-based platform that enables drivers to report and receive real-time alerts about road hazards. 
            The system addresses India's critical road safety challenges, where over 150,000 people die annually in road accidents, 
            many caused by potholes, debris, and unreported road conditions.
          </p>
          <p className="about-text">
            The app works by allowing users to quickly report hazards through an intuitive interface. When a driver spots a hazard, 
            they open the web app, click "Report Hazard," tap the location on an interactive map, select the hazard type 
            (14+ categories including potholes, accidents, lane closures, construction, etc.), and submit. The report instantly 
            appears on the map for all nearby users via WebSocket technology.
          </p>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Updates</h3>
              <p>Instant hazard alerts via WebSocket technology</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Interactive Map</h3>
              <p>OpenStreetMap integration with live markers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Community Verified</h3>
              <p>Upvote system for hazard confirmation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>14+ Hazard Types</h3>
              <p>Potholes, accidents, construction, and more</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Live Statistics</h3>
              <p>Real-time dashboard with hazard analytics</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Responsive</h3>
              <p>Works seamlessly on all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="vision-section">
        <div className="container">
          <h2>Our Vision</h2>
          <p className="vision-text">
            The vision is to create a crowdsourced road safety network where every driver becomes a sensor. 
            Municipal authorities can use the aggregated data to identify high-hazard areas and prioritize repairs. 
            In the future, AI features could automatically detect hazards from images and predict maintenance needs.
          </p>
          <p className="vision-text">
            Ashoka represents a scalable, community-driven approach to improving road safety - turning individual 
            observations into collective wisdom that benefits all road users.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Make Roads Safer?</h2>
          <p>Join thousands of drivers reporting hazards in real-time</p>
          <button className="cta-button-large" onClick={onGetStarted}>
            Launch App →
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Ashoka - Real-Time Road Hazard Reporting</p>
          <p>
            <a href="https://github.com/Chinmay-24/Ashoka" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
