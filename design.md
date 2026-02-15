# Ashoka - Design Document

## 1. System Overview

Ashoka is a real-time road hazard reporting platform built with a client-server architecture using WebSocket technology for instant communication. The system enables crowdsourced hazard reporting with live map visualization.

## 2. Architecture Design

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer                              │
│  (React.js + Leaflet.js + Socket.io-client)                     │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTP/WebSocket
                         │
┌────────────────────────▼────────────────────────────────────────┐
│                        Server Layer                              │
│  (Node.js + Express + Socket.io)                                │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ Read/Write
                         │
┌────────────────────────▼────────────────────────────────────────┐
│                        Data Layer                                │
│  (In-Memory Storage / Future: MongoDB/PostgreSQL)               │
└─────────────────────────────────────────────────────────────────┘
                         │
                         │ Map Tiles
                         │
┌────────────────────────▼────────────────────────────────────────┐
│                        Map Layer                                 │
│  (OpenStreetMap Tiles)                                          │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Component Architecture

**Frontend Components:**
- `App.js` - Main application container
- `LandingPage.js` - Homepage with project information
- `MapContainer` - Interactive map display
- `MapClickHandler` - Handle map click events
- `Marker` - Hazard markers on map
- `Popup` - Hazard detail popups

**Backend Components:**
- `server.js` - Main server file
- REST API endpoints
- Socket.io WebSocket server
- In-memory data store

## 3. Data Model

### 3.1 Hazard Object

```javascript
{
  id: Number,              // Unique identifier
  lat: Number,             // Latitude coordinate
  lng: Number,             // Longitude coordinate
  type: String,            // Hazard type (pothole, accident, etc.)
  description: String,     // Optional user description
  upvotes: Number,         // Confirmation count
  timestamp: String        // ISO 8601 timestamp
}
```

### 3.2 Hazard Types

- `pothole` - Road potholes
- `debris` - Debris on road
- `accident` - Traffic accident
- `flooding` - Road flooding
- `construction` - Construction zone
- `lane_closure` - Lane closure
- `no_parking` - No parking zone
- `road_work` - Road work
- `traffic_jam` - Traffic jam
- `speed_trap` - Speed trap
- `animal_crossing` - Animal crossing
- `ice_snow` - Ice/snow on road
- `broken_traffic_light` - Broken traffic light
- `fallen_tree` - Fallen tree

## 4. API Design

### 4.1 REST API Endpoints

**GET /api/hazards**
- Description: Fetch all hazards
- Response: Array of hazard objects
- Status: 200 OK

**POST /api/hazards**
- Description: Create new hazard report
- Request Body:
  ```json
  {
    "lat": 40.7128,
    "lng": -74.0060,
    "type": "pothole",
    "description": "Large pothole on main street"
  }
  ```
- Response: Created hazard object
- Status: 201 Created

**POST /api/hazards/:id/upvote**
- Description: Upvote/confirm a hazard
- Response: Updated hazard object
- Status: 200 OK

### 4.2 WebSocket Events

**Client → Server:**
- `connection` - Client connects to server

**Server → Client:**
- `newHazard` - Broadcast new hazard to all clients
- `hazardUpdated` - Broadcast hazard update (upvote)

## 5. User Interface Design

### 5.1 Landing Page

**Layout:**
- Hero section with gradient background
- About section with project description
- Features grid (6 feature cards)
- Vision section
- Call-to-action section
- Footer with GitHub link

**Color Scheme:**
- Primary: Purple gradient (#667eea to #764ba2)
- Secondary: White
- Text: Dark gray (#333)
- Accents: Green, red for specific actions

### 5.2 Main Application Interface

**Layout:**
- Full-screen map
- Control panel (top-left)
- Filter panel (top-right)
- Stats panel (bottom-right)

**Control Panel:**
- App title
- Report Hazard button
- Report form (when active):
  - Hazard type dropdown
  - Description input
  - Submit button

**Filter Panel:**
- Filter title
- Filter chips for hazard types
- Toggle on/off functionality

**Stats Panel:**
- Total reports count
- Active hazards count
- Most common hazard type

### 5.3 Map Markers

**Design:**
- Emoji icons for each hazard type
- Default Leaflet marker styling
- Popup on click with:
  - Hazard type and icon
  - Description
  - Upvote count
  - Confirm button

## 6. State Management

### 6.1 Client State

```javascript
{
  showLanding: Boolean,        // Show landing page or app
  hazards: Array,              // All hazard objects
  reportMode: Boolean,         // Report mode active
  selectedLocation: Object,    // Selected map location
  hazardType: String,          // Selected hazard type
  description: String,         // Hazard description
  userLocation: Array,         // User's GPS coordinates
  filterTypes: Array,          // Active filter types
  showStats: Boolean           // Show stats panel
}
```

### 6.2 Server State

```javascript
{
  hazards: Array,              // All hazards in memory
  hazardIdCounter: Number      // Auto-increment ID
}
```

## 7. Real-Time Communication Flow

### 7.1 Report Hazard Flow

1. User clicks "Report Hazard"
2. User taps location on map
3. User selects hazard type
4. User submits report
5. Client sends POST request to `/api/hazards`
6. Server creates hazard object
7. Server stores in memory
8. Server broadcasts `newHazard` event via WebSocket
9. All connected clients receive event
10. Clients update map with new marker

### 7.2 Upvote Flow

1. User clicks "Confirm" on hazard popup
2. Client sends POST request to `/api/hazards/:id/upvote`
3. Server increments upvote count
4. Server broadcasts `hazardUpdated` event
5. All clients update hazard display

## 8. Security Design

### 8.1 Current Security Measures

- CORS enabled for cross-origin requests
- Input validation on server side
- No sensitive data stored

### 8.2 Future Security Enhancements

- HTTPS for production
- Rate limiting on API endpoints
- User authentication with JWT
- Input sanitization
- SQL injection prevention (when using database)

## 9. Performance Optimization

### 9.1 Current Optimizations

- In-memory storage for fast reads/writes
- WebSocket for efficient real-time updates
- Minimal data transfer (only coordinates and type)
- Client-side filtering

### 9.2 Future Optimizations

- Database indexing on location coordinates
- Caching frequently accessed data
- Lazy loading of map tiles
- Pagination for large datasets
- CDN for static assets

## 10. Scalability Design

### 10.1 Horizontal Scaling

- Add load balancer for multiple server instances
- Use Redis for shared session storage
- Implement sticky sessions for WebSocket

### 10.2 Database Scaling

- Migrate to PostgreSQL with PostGIS extension
- Implement geospatial indexing
- Use read replicas for queries
- Implement caching layer (Redis)

### 10.3 Future Microservices

- Hazard reporting service
- Map service
- Notification service
- Analytics service
- User management service

## 11. Error Handling

### 11.1 Client-Side Errors

- Network errors: Show retry option
- Geolocation denied: Use default location
- Invalid input: Show validation messages

### 11.2 Server-Side Errors

- 404: Hazard not found
- 500: Internal server error
- WebSocket disconnect: Auto-reconnect

## 12. Testing Strategy

### 12.1 Unit Tests

- Test hazard creation logic
- Test upvote functionality
- Test filter logic

### 12.2 Integration Tests

- Test REST API endpoints
- Test WebSocket communication
- Test database operations

### 12.3 End-to-End Tests

- Test complete report flow
- Test real-time updates
- Test multi-user scenarios

## 13. Deployment Architecture

### 13.1 Development Environment

- Local Node.js server (port 5000)
- Local React dev server (port 3000)
- In-memory storage

### 13.2 Production Environment

- Frontend: Vercel/Netlify
- Backend: Heroku/Render/Railway
- Database: MongoDB Atlas / PostgreSQL (Supabase)
- CDN: Cloudflare

## 14. Monitoring & Analytics

### 14.1 Metrics to Track

- Total hazards reported
- Active users
- Most common hazard types
- Geographic distribution
- Response time
- Uptime

### 14.2 Future Analytics

- User engagement metrics
- Hazard resolution time
- Municipal authority dashboard
- Heatmap of high-risk areas

## 15. Accessibility Design

- Keyboard navigation support
- Screen reader compatible
- High contrast mode
- Responsive design for all devices
- Touch-friendly interface

## 16. Internationalization (Future)

- Multi-language support
- Localized hazard types
- Regional map preferences
- Date/time formatting

## 17. Design Patterns Used

- **MVC Pattern**: Separation of concerns (Model-View-Controller)
- **Observer Pattern**: WebSocket event listeners
- **Singleton Pattern**: Server instance
- **Factory Pattern**: Hazard object creation
- **Component Pattern**: React components

## 18. Technology Justification

### Why React?
- Component-based architecture
- Large ecosystem
- Easy state management
- Virtual DOM for performance

### Why Socket.io?
- Real-time bidirectional communication
- Automatic reconnection
- Fallback to polling
- Cross-browser support

### Why OpenStreetMap?
- Free and open-source
- No API costs
- Community-driven
- Customizable

### Why Node.js?
- JavaScript on server and client
- Non-blocking I/O
- Large package ecosystem
- Easy WebSocket integration
