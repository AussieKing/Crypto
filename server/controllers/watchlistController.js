//! Handles CRUD for the watchlist
//? This will contain logic for adding coins to a user's watchlist, removing coins, fetching the list of coins in the watchlist, etc.

const User = require('../models/User');

exports.addCoin = async (req, res) => {
    console.log("Request received to add coin to watchlist");

    try {
        const { firebaseUID, coin } = req.body;

        const user = await User.findOne({ firebaseUID });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        
        user.watchlist.push(coin);
        await user.save();

        res.json(user.watchlist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.removeCoin = async (req, res) => {
    try {
        const { firebaseUID, coinId } = req.body;

        const user = await User.findOne({ firebaseUID });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.watchlist = user.watchlist.filter(coin => coin.coinId !== coinId);
        await user.save();

        res.json(user.watchlist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getWatchlist = async (req, res) => {
    try {
        const user = await User.findOne({ firebaseUID: req.params.firebaseUID });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        
        res.json(user.watchlist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
