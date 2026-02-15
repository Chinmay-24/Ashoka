import React from 'react';
import './PresentationPage.css';

function HowItWorks() {
  return (
    <div className="presentation-page">
      <div className="slide-content">
        <h1 className="slide-title">How It Works</h1>
        <h2 className="slide-subtitle">The Ashoka Workflow</h2>
        
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-icon">1️⃣</div>
            <h3>User Opens App</h3>
            <p>Driver opens Ashoka web app in any browser. App automatically detects user's location using geolocation API. Map centers on current location.</p>
          </div>

          <div className="workflow-arrow">↓</div>

          <div className="workflow-step">
            <div className="step-icon">2️⃣</div>
            <h3>Report Hazard</h3>
            <p>User clicks "Report Hazard" button. Taps on map where hazard is located. Selects hazard type from dropdown. Adds optional description and submits.</p>
          </div>

          <div className="workflow-arrow">↓</div>

          <div className="workflow-step">
            <div className="step-icon">3️⃣</div>
            <h3>Server Processing</h3>
            <p>Report data sent to server via REST API. Server generates unique ID and timestamp. Report stored in memory database.</p>
          </div>

          <div className="workflow-arrow">↓</div>

          <div className="workflow-step">
            <div className="step-icon">4️⃣</div>
            <h3>Real-Time Broadcast</h3>
            <p>Server broadcasts new hazard to all connected clients via WebSocket. Sub-second latency ensures instant delivery. All nearby users receive update simultaneously.</p>
          </div>

          <div className="workflow-arrow">↓</div>

          <div className="workflow-step">
            <div className="step-icon">5️⃣</div>
            <h3>Community Verification</h3>
            <p>Other users see new hazard marker on map. Can click to view details and "Confirm" the report. Reports with higher upvotes get priority display.</p>
          </div>

          <div className="workflow-arrow">↓</div>

          <div className="workflow-step">
            <div className="step-icon">6️⃣</div>
            <h3>Data Aggregation</h3>
            <p>System tracks frequently confirmed hazards. Duplicate reports get clustered. Statistics updated in real-time. Data available for municipal authorities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
