//! Routes related to user operations
//? These will define the API endpoints for user-related operations and watchlist operations, respectively. They will link routes to their respective controllers.

const express = require('express');
const router = express.Router();
const { registerUser, getUserProfile } = require('../controllers/userController');
const UserModel = require('../models/User');

router.get('/:firebaseUID', getUserProfile);

//! USING THE CONTROLLER
router.post('/register', registerUser);

//! VERSION TO KEEP IT ALL HERE
// router.post('/register', async (req, res) => {
//     const { firebaseUID } = req.body;

//     if (!firebaseUID) {
//         return res.status(400).json({ message: 'Firebase UID is required.' });
//     }

//     try {
//         const newUser = new UserModel({ firebaseUID, watchlist: [] });
//         await newUser.save();

//         return res.status(201).json({ message: 'User registered successfully.' });
//     } catch (error) {
//         console.error("Error registering user:", error);
//         return res.status(500).json({ message: 'Server error.' });
//     }
// });

module.exports = router;
