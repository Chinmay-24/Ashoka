import React from 'react';
import './PresentationPage.css';

function Solution() {
  return (
    <div className="presentation-page">
      <div className="slide-content">
        <h1 className="slide-title">Our Solution</h1>
        <h2 className="slide-subtitle">Ashoka - Real-Time Road Hazard Reporting</h2>
        
        <div className="solution-overview">
          <p className="lead-text">
            A crowdsourced platform where every driver becomes a road safety sensor, 
            reporting and receiving instant alerts about road hazards.
          </p>
        </div>

        <div className="comparison-grid">
          <div className="comparison-column">
            <h3>❌ Existing Solutions</h3>
            <ul>
              <li>Municipal Helplines - Slow response (days/weeks)</li>
              <li>Waze/Google Maps - Limited hazard reporting</li>
              <li>Govt Apps - Require downloads, low adoption</li>
              <li>Social Media - Unstructured, hard to track</li>
            </ul>
          </div>
          
          <div className="comparison-column highlight">
            <h3>✅ Ashoka Advantages</h3>
            <ul>
              <li>Real-time updates (sub-second latency)</li>
              <li>No app download - web-based</li>
              <li>Community verification system</li>
              <li>14+ comprehensive hazard types</li>
              <li>Open source & free (OpenStreetMap)</li>
              <li>Data insights for authorities</li>
            </ul>
          </div>
        </div>

        <div className="usp-section">
          <h3>🎯 Unique Selling Points</h3>
          <div className="usp-grid">
            <div className="usp-card">
              <span className="usp-icon">⚡</span>
              <h4>Instant Alerts</h4>
              <p>WebSocket technology for real-time updates</p>
            </div>
            <div className="usp-card">
              <span className="usp-icon">👥</span>
              <h4>Community Driven</h4>
              <p>Upvote system for verified reports</p>
            </div>
            <div className="usp-card">
              <span className="usp-icon">🆓</span>
              <h4>Zero Cost</h4>
              <p>Free maps, no API charges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
