// routes/booking.js
const express = require('express');
const authMiddleware = require('../middelware/auth');
const router = express.Router();
const { Booking } = require('../models/BookingModel');

router.post('/', authMiddleware, async (req, res) => {
  const { date, time, guests, name, email, phone, specialRequests } = req.body;

  if (!date || !time || !guests || !name || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Check for existing booking at the same date and time
    const existingBooking = await Booking.findOne({ date, time });

    if (existingBooking) {
      return res.status(409).json({ message: "This time slot is already booked. Please choose a different time." });
    }

    await Booking.create({
      user: req.user.id,
      date,
      time,
      guests,
      name,
      email,
      phone,
      specialRequests,
    });

    return res.status(201).json({ message: "Booking successful" });
  } catch (err) {
    console.error("Booking error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const bookingId = await req.params.id;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Optional: Ensure the user is only deleting their own booking
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to cancel this booking" });
    }

    await booking.deleteOne();
    return res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (err) {
    console.error("Cancel booking error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = router;
