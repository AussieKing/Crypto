//! Main server file to setup and run your Express app
//? These will define the API endpoints for user-related operations and watchlist operations, respectively. They will link routes to their respective controllers.

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const watchlistRoutes = require('./routes/watchlistRoutes');

// Initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/watchlist', watchlistRoutes);

// Sample Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to MongoDB
const connectDB = require('./utils/db');
connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});