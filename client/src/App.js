import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import io from 'socket.io-client';
import LandingPage from './LandingPage';
import './App.css';

const socket = io('http://localhost:5000');

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const hazardIcons = {
  pothole: '🕳️',
  debris: '🚧',
  accident: '🚨',
  flooding: '💧',
  construction: '⚠️',
  lane_closure: '🚫',
  no_parking: '🅿️',
  road_work: '👷',
  traffic_jam: '🚗',
  speed_trap: '📷',
  animal_crossing: '🦌',
  ice_snow: '❄️',
  broken_traffic_light: '🚦',
  fallen_tree: '🌳'
};

function MapClickHandler({ onMapClick }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
}

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [hazards, setHazards] = useState([]);
  const [reportMode, setReportMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hazardType, setHazardType] = useState('pothole');
  const [description, setDescription] = useState('');
  const [userLocation, setUserLocation] = useState([51.505, -0.09]); // Default to London
  const [filterTypes, setFilterTypes] = useState([]);
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => console.log('Location access denied')
      );
    }

    // Fetch existing hazards
    fetch('http://localhost:5000/api/hazards')
      .then(res => res.json())
      .then(data => setHazards(data));

    // Listen for real-time updates
    socket.on('newHazard', (hazard) => {
      setHazards(prev => [...prev, hazard]);
    });

    socket.on('hazardUpdated', (updatedHazard) => {
      setHazards(prev => prev.map(h => h.id === updatedHazard.id ? updatedHazard : h));
    });

    return () => {
      socket.off('newHazard');
      socket.off('hazardUpdated');
    };
  }, []);

  const handleMapClick = (latlng) => {
    if (reportMode) {
      setSelectedLocation(latlng);
    }
  };

  const submitReport = async () => {
    if (!selectedLocation) return;

    const newHazard = {
      lat: selectedLocation.lat,
      lng: selectedLocation.lng,
      type: hazardType,
      description: description || `${hazardType} reported`
    };

    await fetch('http://localhost:5000/api/hazards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHazard)
    });

    setReportMode(false);
    setSelectedLocation(null);
    setDescription('');
  };

  const upvoteHazard = async (id) => {
    await fetch(`http://localhost:5000/api/hazards/${id}/upvote`, {
      method: 'POST'
    });
  };

  const toggleFilter = (type) => {
    setFilterTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const filteredHazards = filterTypes.length === 0 
    ? hazards 
    : hazards.filter(h => filterTypes.includes(h.type));

  const hazardStats = hazards.reduce((acc, h) => {
    acc[h.type] = (acc[h.type] || 0) + 1;
    return acc;
  }, {});

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  return (
    <div className="App">
      <div className="controls">
        <h1>🚗 Road Hazard Reporter</h1>
        <button 
          className={reportMode ? 'active' : ''}
          onClick={() => setReportMode(!reportMode)}
        >
          {reportMode ? '✖ Cancel Report' : '➕ Report Hazard'}
        </button>
        
        {reportMode && (
          <div className="report-form">
            <p>📍 Click on the map to select location</p>
            <select value={hazardType} onChange={(e) => setHazardType(e.target.value)}>
              <option value="pothole">🕳️ Pothole</option>
              <option value="debris">🚧 Debris on Road</option>
              <option value="accident">🚨 Accident</option>
              <option value="flooding">💧 Flooding</option>
              <option value="construction">⚠️ Construction Zone</option>
              <option value="lane_closure">🚫 Lane Closure</option>
              <option value="no_parking">🅿️ No Parking Zone</option>
              <option value="road_work">👷 Road Work</option>
              <option value="traffic_jam">🚗 Traffic Jam</option>
              <option value="speed_trap">📷 Speed Trap</option>
              <option value="animal_crossing">🦌 Animal Crossing</option>
              <option value="ice_snow">❄️ Ice/Snow</option>
              <option value="broken_traffic_light">🚦 Broken Traffic Light</option>
              <option value="fallen_tree">🌳 Fallen Tree</option>
            </select>
            <input 
              type="text" 
              placeholder="Add details (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button 
              onClick={submitReport}
              disabled={!selectedLocation}
            >
              ✓ Submit Report
            </button>
          </div>
        )}
      </div>

      <div className="filter-panel">
        <h3>🔍 Filter Hazards</h3>
        <div className="filter-options">
          {Object.keys(hazardIcons).slice(0, 6).map(type => (
            <div
              key={type}
              className={`filter-chip ${filterTypes.includes(type) ? 'active' : ''}`}
              onClick={() => toggleFilter(type)}
            >
              {hazardIcons[type]} {type.replace('_', ' ')}
            </div>
          ))}
        </div>
      </div>

      {showStats && (
        <div className="stats-panel">
          <h3>📊 Live Stats</h3>
          <div className="stat-item">
            <span className="stat-label">Total Reports</span>
            <span className="stat-value">{hazards.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Active Now</span>
            <span className="stat-value">{filteredHazards.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Most Common</span>
            <span className="stat-value">
              {Object.keys(hazardStats).length > 0 
                ? Object.entries(hazardStats).sort((a, b) => b[1] - a[1])[0][0]
                : 'N/A'}
            </span>
          </div>
        </div>
      )}

      <MapContainer center={userLocation} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <MapClickHandler onMapClick={handleMapClick} />
        
        {selectedLocation && reportMode && (
          <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
            <Popup>📍 New hazard location</Popup>
          </Marker>
        )}

        {filteredHazards.map(hazard => (
          <Marker key={hazard.id} position={[hazard.lat, hazard.lng]}>
            <Popup>
              <div className="hazard-popup">
                <h3>{hazardIcons[hazard.type]} {hazard.type.replace('_', ' ')}</h3>
                <p>{hazard.description}</p>
                <p><strong>{hazard.upvotes}</strong> confirmations</p>
                <button onClick={() => upvoteHazard(hazard.id)}>👍 Confirm This</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
