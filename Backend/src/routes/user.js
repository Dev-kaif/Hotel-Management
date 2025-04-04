const express = require('express');
const authMiddleware = require('../middelware/auth');
const router = express.Router();
const { User } = require('../models/userModel');
const { Booking } = require('../models/BookingModel');

// Route to get logged-in user's info
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('username');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ name: user.name });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get("/reservations", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Ensure your authMiddleware attaches user info
    const reservations = await Booking.find({ user: userId });
    res.json(reservations);
  } catch (err) {
    console.error("Error fetching reservations:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
