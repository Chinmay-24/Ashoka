import React from 'react';
import './PresentationPage.css';

function Technology() {
  return (
    <div className="presentation-page">
      <div className="slide-content">
        <h1 className="slide-title">Technology Stack</h1>
        <h2 className="slide-subtitle">Built with Modern Tech</h2>
        
        <div className="tech-grid">
          <div className="tech-category">
            <h3>Frontend</h3>
            <ul className="tech-list">
              <li><strong>React.js</strong> - UI framework</li>
              <li><strong>Leaflet.js</strong> - Interactive maps</li>
              <li><strong>Socket.io-client</strong> - Real-time communication</li>
              <li><strong>CSS3</strong> - Modern styling</li>
              <li><strong>HTML5</strong> - Geolocation API</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Backend</h3>
            <ul className="tech-list">
              <li><strong>Node.js</strong> - JavaScript runtime</li>
              <li><strong>Express.js</strong> - Web framework</li>
              <li><strong>Socket.io</strong> - WebSocket server</li>
              <li><strong>CORS</strong> - Cross-origin support</li>
            </ul>
          </div>

          <div className="tech-category">
            <h3>Data & Maps</h3>
            <ul className="tech-list">
              <li><strong>OpenStreetMap</strong> - Free map tiles</li>
              <li><strong>In-Memory Storage</strong> - Fast data access</li>
              <li><strong>Future: MongoDB/PostgreSQL</strong></li>
            </ul>
          </div>
        </div>

        <div className="architecture-diagram">
          <h3>System Architecture</h3>
          <div className="arch-layers">
            <div className="arch-layer">
              <strong>Client Layer</strong>
              <p>React + Leaflet Maps</p>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-layer">
              <strong>Server Layer</strong>
              <p>Node.js + Socket.io</p>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-layer">
              <strong>Data Layer</strong>
              <p>In-Memory DB</p>
            </div>
          </div>
        </div>

        <div className="tech-benefits">
          <h3>Why These Choices?</h3>
          <div className="benefits-grid">
            <div className="benefit">✅ All open-source and free</div>
            <div className="benefit">✅ Lightweight and performant</div>
            <div className="benefit">✅ Large community support</div>
            <div className="benefit">✅ Easy to scale</div>
            <div className="benefit">✅ Cross-platform compatible</div>
            <div className="benefit">✅ No licensing costs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
