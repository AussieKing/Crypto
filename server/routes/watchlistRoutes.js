//! Routes related to watchlist operations
//? This will be the main entry point for your backend. Here, we'll set up Express, connect to MongoDB, use routes, etc.

const express = require('express');
const router = express.Router();
const { addCoin, removeCoin, getWatchlist } = require('../controllers/watchlistController');

router.post('/add', addCoin);
router.post('/remove', removeCoin);
router.get('/:firebaseUID', getWatchlist);

module.exports = router;
