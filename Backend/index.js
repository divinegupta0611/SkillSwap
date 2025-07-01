// index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Optional: loads .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.get('/', (req, res) => {
  res.send('SkillSwap Express Server is running 🚀');
});

// Sample API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
