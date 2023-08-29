//! Handles CRUD for user and their details
//? This will contain logic for user registration, login, fetching user details, updating user details, etc. Migrating from Firebase authentication to custom solution, we'll handle it here.

const User = require('../models/User');

exports.registerUser = async (req, res) => {
    console.log("Hit the register endpoint");

    try {
        const { firebaseUID, email } = req.body;
        
        // Check if user already exists
        let user = await User.findOne({ firebaseUID });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        
        user = new User({
            firebaseUID,
            email
        });

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({ firebaseUID: req.params.firebaseUID });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
