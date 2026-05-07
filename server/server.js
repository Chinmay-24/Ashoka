const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

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

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ashoka';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Hazard Schema
const hazardSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  type: { type: String, required: true },
  description: { type: String, default: '' },
  upvotes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now }
});

const Hazard = mongoose.model('Hazard', hazardSchema);

// REST endpoints
app.get('/api/hazards', async (req, res) => {
  try {
    const hazards = await Hazard.find().sort({ timestamp: -1 });
    res.json(hazards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hazards' });
  }
});

app.post('/api/hazards', async (req, res) => {
  try {
    const { lat, lng, type, description } = req.body;
    const newHazard = new Hazard({
      lat,
      lng,
      type,
      description: description || `${type} reported`
    });
    
    await newHazard.save();
    
    // Broadcast to all connected clients
    io.emit('newHazard', newHazard);
    
    res.status(201).json(newHazard);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hazard' });
  }
});

app.post('/api/hazards/:id/upvote', async (req, res) => {
  try {
    const hazard = await Hazard.findById(req.params.id);
    if (hazard) {
      hazard.upvotes++;
      await hazard.save();
      io.emit('hazardUpdated', hazard);
      res.json(hazard);
    } else {
      res.status(404).json({ error: 'Hazard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to upvote hazard' });
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
