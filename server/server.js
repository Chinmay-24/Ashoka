const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// In-memory storage (replace with database later)
let hazards = [];
let hazardIdCounter = 1;

// REST endpoints
app.get('/api/hazards', (req, res) => {
  res.json(hazards);
});

app.post('/api/hazards', (req, res) => {
  const { lat, lng, type, description } = req.body;
  const newHazard = {
    id: hazardIdCounter++,
    lat,
    lng,
    type,
    description,
    upvotes: 0,
    timestamp: new Date().toISOString()
  };
  hazards.push(newHazard);
  
  // Broadcast to all connected clients
  io.emit('newHazard', newHazard);
  
  res.status(201).json(newHazard);
});

app.post('/api/hazards/:id/upvote', (req, res) => {
  const hazard = hazards.find(h => h.id === parseInt(req.params.id));
  if (hazard) {
    hazard.upvotes++;
    io.emit('hazardUpdated', hazard);
    res.json(hazard);
  } else {
    res.status(404).json({ error: 'Hazard not found' });
  }
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
