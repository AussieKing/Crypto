// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to MongoDB
const connectDB = require('./utils/db');
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
