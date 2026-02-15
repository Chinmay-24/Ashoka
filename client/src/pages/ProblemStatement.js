import React from 'react';
import './PresentationPage.css';

function ProblemStatement() {
  return (
    <div className="presentation-page">
      <div className="slide-content">
        <h1 className="slide-title">The Problem</h1>
        <h2 className="slide-subtitle">Road Safety Crisis in India</h2>
        
        <div className="problem-stats">
          <div className="stat-box">
            <div className="stat-number">150,000+</div>
            <div className="stat-label">Annual Road Deaths</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">30%</div>
            <div className="stat-label">Accidents Due to Potholes</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">3%</div>
            <div className="stat-label">GDP Lost to Road Accidents</div>
          </div>
        </div>

        <div className="problem-list">
          <h3>Current Challenges:</h3>
          <ul>
            <li>❌ Delayed reporting of road hazards to authorities</li>
            <li>❌ No centralized system for real-time alerts</li>
            <li>❌ Drivers unaware of hazards until it's too late</li>
            <li>❌ Manual reporting takes days/weeks to process</li>
            <li>❌ Poor road conditions cause vehicle damage and accidents</li>
            <li>❌ Limited visibility of hazards for other drivers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProblemStatement;
