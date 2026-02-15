# Ashoka - Requirements Document

## 1. Introduction

Ashoka is a real-time road hazard reporting system that enables drivers to report and receive instant alerts about road conditions like potholes, accidents, lane closures, and other hazards. The platform uses crowdsourced data to improve road safety for all users.

## 2. Vision & Goals

- Create a crowdsourced road safety network where every driver becomes a "road sensor"
- Reduce road accidents caused by unreported hazards
- Provide real-time hazard information to all nearby drivers
- Enable community verification of reported hazards
- Generate data insights for municipal authorities

## 3. User Roles

### Driver (Reporter)
- Report road hazards
- View hazards on map
- Confirm/upvote other reports
- Filter hazards by type

### Driver (Watcher)
- View all reported hazards
- Receive real-time updates
- Confirm hazards
- Filter and search hazards

## 4. Functional Requirements

### FR-1: User Authentication (Optional for MVP)
- Users can access the app without login (anonymous)
- Future: User accounts with profile management

### FR-2: Hazard Reporting
- Users can report hazards by tapping location on map
- Users can select hazard type from 14+ categories
- Users can add optional description
- Reports include GPS coordinates and timestamp

### FR-3: Real-Time Updates
- New hazard reports broadcast to all connected users
- Updates appear within 1-2 seconds
- No page refresh required

### FR-4: Map Visualization
- Interactive map using OpenStreetMap
- Hazard markers with emoji icons
- Auto-center on user location
- Zoom and pan functionality

### FR-5: Hazard Filtering
- Filter by hazard type
- Toggle multiple filter types
- Clear all filters

### FR-6: Community Verification
- Users can "Confirm" hazard reports
- Upvote system for credibility
- High-confidence hazards prioritized

### FR-7: Live Statistics
- Total number of reports
- Active hazards count
- Most common hazard type
- Real-time updates to stats

### FR-8: Geolocation
- Detect user's current location
- Center map on user position
- Request location permission

## 5. Non-Functional Requirements

### NFR-1: Performance
- Report submission < 2 seconds
- Real-time updates < 2 seconds
- Map loads within 3 seconds

### NFR-2: Availability
- 99% uptime for web app
- Server should handle 100+ concurrent users

### NFR-3: Usability
- Simple, intuitive interface
- Works on mobile and desktop
- No app download required (web-based)

### NFR-4: Scalability
- Can add database for persistence
- Can add user authentication
- Can add AI features later

### NFR-5: Security
- HTTPS for production
- Input validation on server
- CORS configuration

## 6. Technical Requirements

### Frontend
- React.js 18+
- Leaflet.js 1.9+
- Socket.io-client 4.6+
- OpenStreetMap tiles

### Backend
- Node.js 16+
- Express.js 4.18+
- Socket.io 4.6+
- CORS middleware

### Data Storage
- In-memory array (MVP)
- Can upgrade to MongoDB/PostgreSQL

### Deployment
- Web-based (no mobile app required)
- Responsive design
- Cross-browser compatible

## 7. Future Enhancements

- User authentication and profiles
- Image upload for hazard reports
- AI-powered hazard detection
- Predictive maintenance suggestions
- Mobile app (iOS/Android)
- Municipal authority dashboard
- Export data to CSV/JSON
- Route optimization to avoid hazards
- Push notifications for hazards on frequent routes

## 8. Constraints

- OpenStreetMap usage limits (free tier)
- No API costs (using free map tiles)
- In-memory storage (temporary, MVP)
- No user authentication (MVP)

## 9. Assumptions

- Users have modern web browsers
- Users have location services enabled
- Users understand basic map navigation
- Internet connectivity available

## 10. Glossary

- **Hazard**: Any road condition that could cause accidents (pothole, debris, accident, etc.)
- **Confirmation**: User upvoting a report to verify its accuracy
- **Real-time**: Updates appearing within 1-2 seconds of submission
- **Crowdsourced**: Data contributed by multiple users
