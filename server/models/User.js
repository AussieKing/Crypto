//! Model for the client/user
//? This will be a schema for our user. It can contain details like username, email, password (hashed, of course), and an array of favorite coins or a reference to a watchlist.

//! USER MODEL

const mongoose = require('mongoose');

// Coin schema
const CoinSchema = new mongoose.Schema({
    coinId: {
        type: String,
        required: true,
    },
    name: String,
    image: String,
    currentPrice: Number,
});

// User schema
const UserSchema = new mongoose.Schema({
    firebaseUID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    watchlist: [CoinSchema]
});

module.exports = mongoose.model('User', UserSchema);
