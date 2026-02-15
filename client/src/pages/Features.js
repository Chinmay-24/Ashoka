import React from 'react';
import './PresentationPage.css';

function Features() {
  return (
    <div className="presentation-page">
      <div className="slide-content">
        <h1 className="slide-title">Key Features</h1>
        <h2 className="slide-subtitle">What Ashoka Offers</h2>
        
        <div className="features-showcase">
          <div className="feature-item">
            <div className="feature-number">1</div>
            <div className="feature-details">
              <h3>📱 Real-Time Reporting</h3>
              <p>Tap location, select type, submit in 10 seconds. Reports appear instantly for all nearby users via WebSocket.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">2</div>
            <div className="feature-details">
              <h3>🗺️ 14 Hazard Types</h3>
              <p>Potholes, accidents, lane closures, construction, flooding, debris, speed traps, animal crossings, ice/snow, broken traffic lights, fallen trees, no parking zones, road work, traffic jams.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">3</div>
            <div className="feature-details">
              <h3>👍 Community Verification</h3>
              <p>Users can "Confirm" reports by upvoting. High-confidence hazards get priority display, reducing false reports.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">4</div>
            <div className="feature-details">
              <h3>📍 Live Map Dashboard</h3>
              <p>Interactive OpenStreetMap with color-coded hazard markers. Auto-centers on user location with geolocation.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">5</div>
            <div className="feature-details">
              <h3>🔍 Filter & Search</h3>
              <p>Filter by hazard type to focus on what matters. Toggle features on/off with one click for a clean interface.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-number">6</div>
            <div className="feature-details">
              <h3>📊 Live Statistics</h3>
              <p>Real-time counts: Total reports, Active hazards, Most common type. Helps identify high-risk areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
