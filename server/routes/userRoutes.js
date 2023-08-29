//! Routes related to user operations
//? These will define the API endpoints for user-related operations and watchlist operations, respectively. They will link routes to their respective controllers.

const express = require('express');
const router = express.Router();
const { registerUser, getUserProfile } = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/:firebaseUID', getUserProfile);

module.exports = router;
