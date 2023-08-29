//! Main server file to setup and run your Express app
//? These will define the API endpoints for user-related operations and watchlist operations, respectively. They will link routes to their respective controllers.
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const watchlistRoutes = require('./routes/watchlistRoutes');

// Initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware - Placed here to log all incoming requests before they're routed.
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

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

// Static route and wildcard for Production should be the last routes.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));

    // The wildcard route. This should always be at the bottom.
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
