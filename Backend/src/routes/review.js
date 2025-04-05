const express = require("express");
const { Review } = require("../models/Review");
const { User } = require("../models/userModel");
const authMiddleware = require("../middelware/auth");

const router = express.Router();

// POST Review
router.post("/", authMiddleware, async (req, res) => {
  const { rating, comment } = req.body;

  try {
    // Get the user's name
    const user = await User.findById(req.user.id).select("name");
    const name = user?.name || "Anonymous";

    const review = new Review({
      user: req.user.id,
      name,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json(review);
  } catch (err) {
    console.error("Error saving review:", err);
    res.status(500).json({ error: "Failed to submit review" });
  }
});

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("user", "name") // populates only the 'name' field of the user
      .sort({ createdAt: -1 });

    const formatted = reviews.map((r) => ({
      _id: r._id,
      user: r.user._id,
      name: r.user.name, // we extract name here
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});


// GET logged-in user's reviews
router.get("/my", authMiddleware, async (req, res) => {
  try {
    const myReviews = await Review.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(myReviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch your reviews" });
  }
});

// DELETE Review
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) return res.status(404).json({ error: "Review not found" });

    // Allow delete only if user is the owner
    if (review.user.toString() !== req.user.id)
      return res.status(403).json({ error: "Unauthorized" });

    await review.deleteOne();
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting review:", err);
    res.status(500).json({ error: "Failed to delete review" });
  }
});


module.exports = router;
