import React from 'react';
import './PresentationPage.css';

function Impact() {
  return (
    <div className="presentation-page">
      <div className="slide-content">
        <h1 className="slide-title">Impact & Vision</h1>
        <h2 className="slide-subtitle">The Bigger Picture</h2>
        
        <div className="vision-statement">
          <p className="vision-quote">
            "Every driver is a road safety sensor"
          </p>
        </div>

        <div className="impact-timeline">
          <div className="timeline-item">
            <h3>🎯 Short-term Impact</h3>
            <ul>
              <li>Safer roads through real-time hazard awareness</li>
              <li>Fewer accidents caused by unreported hazards</li>
              <li>Reduced vehicle damage from potholes</li>
              <li>Faster emergency response to accidents</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>📈 Medium-term Impact</h3>
            <ul>
              <li>Data-driven municipal road maintenance planning</li>
              <li>Identification of high-hazard areas</li>
              <li>Optimized resource allocation for repairs</li>
              <li>Community engagement in road safety</li>
            </ul>
          </div>

          <div className="timeline-item">
            <h3>🌟 Long-term Vision</h3>
            <ul>
              <li>National road safety network</li>
              <li>Integration with navigation apps (Waze, Google Maps)</li>
              <li>AI-powered predictive maintenance</li>
              <li>Reduce road accident deaths by 50% in 10 years</li>
            </ul>
          </div>
        </div>

        <div className="beneficiaries">
          <h3>Who Benefits?</h3>
          <div className="beneficiary-grid">
            <div className="beneficiary-card">
              <span className="beneficiary-icon">🚗</span>
              <h4>Daily Commuters</h4>
              <p>Avoid hazards on their route</p>
            </div>
            <div className="beneficiary-card">
              <span className="beneficiary-icon">🚚</span>
              <h4>Delivery Drivers</h4>
              <p>Plan safer, faster routes</p>
            </div>
            <div className="beneficiary-card">
              <span className="beneficiary-icon">🏛️</span>
              <h4>Authorities</h4>
              <p>Data for better planning</p>
            </div>
            <div className="beneficiary-card">
              <span className="beneficiary-icon">🌍</span>
              <h4>Society</h4>
              <p>Reduced accidents & costs</p>
            </div>
          </div>
        </div>

        <div className="future-enhancements">
          <h3>🚀 Future Enhancements</h3>
          <div className="enhancements-list">
            <div className="enhancement">📸 Image recognition for automatic hazard detection</div>
            <div className="enhancement">🤖 AI clustering of duplicate reports</div>
            <div className="enhancement">📱 Native mobile apps (iOS/Android)</div>
            <div className="enhancement">🔔 Push notifications for frequent routes</div>
            <div className="enhancement">🗺️ Route optimization to avoid hazards</div>
            <div className="enhancement">📊 Municipal authority dashboard</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
