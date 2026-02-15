# Road Hazard Reporter

Real-time road hazard reporting system where users can report and view road issues like potholes, debris, accidents, etc.

## Features
- Real-time hazard reporting on interactive map
- Instant updates for all users via WebSocket
- Upvote/confirm hazards to build credibility
- Multiple hazard types (pothole, debris, accident, flooding, construction)
- Geolocation support

## Tech Stack
- Frontend: React + Leaflet.js (OpenStreetMap)
- Backend: Node.js + Express + Socket.io
- Real-time: WebSocket communication

## Setup

1. Install dependencies:
```
npm run install-all
```

2. Run the application:
```
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend on http://localhost:3000

## Usage
1. Click "Report Hazard" button
2. Click on the map where the hazard is located
3. Select hazard type and add optional description
4. Submit - all users see it instantly
5. Click on markers to view details and upvote

## Future Enhancements
- Database integration (MongoDB/PostgreSQL)
- User authentication
- AI clustering of duplicate reports
- Auto-expire old hazards
- Route suggestions to avoid hazards
- Mobile app version
