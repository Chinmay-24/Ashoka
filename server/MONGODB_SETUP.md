# MongoDB Setup Guide

## Option 1: Local MongoDB Installation

### Windows
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Install MongoDB with default settings
3. MongoDB will run automatically on `mongodb://localhost:27017`
4. No additional configuration needed - the app will connect automatically

### Verify Installation
```bash
mongosh
```

## Option 2: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier available)
4. Click "Connect" and choose "Connect your application"
5. Copy the connection string
6. Create a `.env` file in the server directory:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ashoka
```

## Running the Application

### With Local MongoDB
```bash
cd server
npm install
npm run dev
```

### With MongoDB Atlas
```bash
cd server
# Create .env file with your MongoDB Atlas connection string
npm install
npm run dev
```

## Database Structure

**Collection:** hazards

**Schema:**
- `lat` (Number, required) - Latitude coordinate
- `lng` (Number, required) - Longitude coordinate
- `type` (String, required) - Hazard type (pothole, debris, etc.)
- `description` (String) - Optional description
- `upvotes` (Number, default: 0) - Community verification count
- `timestamp` (Date, default: now) - Report creation time

## Viewing Data

### Using MongoDB Compass (GUI)
1. Download from https://www.mongodb.com/products/compass
2. Connect to `mongodb://localhost:27017`
3. Browse the `ashoka` database

### Using mongosh (CLI)
```bash
mongosh
use ashoka
db.hazards.find()
```
