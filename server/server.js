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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;