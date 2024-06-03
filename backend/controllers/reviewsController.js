const Reviews = require('../models/reviews');

// Get all reviewss
exports.getreviewss = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    if (!reviews) return res.status(404).json({ message: 'No reviewss in DB' });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single reviews by ID
exports.getreviewsById = async (req, res) => {
  try {
    const reviews = await Reviews.findById(req.params.id);
    if (!reviews) return res.status(404).json({ message: 'reviews not found' });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new reviews
exports.createreviews = async (req, res) => {
  const reviews = new Reviews({
    dogId: req.body.dogId,
    userId: req.body.userId,
    userName: req.body.userName,
    review: req.body.review,
    stars: req.body.stars,
  });
  try {
    const newreviews = await reviews.save();
    res.status(201).json(newreviews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a reviews
exports.updatereviews = async (req, res) => {
  try {
    const reviews = await Reviews.findById(req.params.id);
    if (!reviews) return res.status(404).json({ message: 'reviews not found' });

    // Update fields
    reviews.dogId = req.body.dogId || reviews.dogId;
    reviews.userId = req.body.userId || reviews.userId;
    reviews.userName = req.body.userName || reviews.userName;
    reviews.review = req.body.review || reviews.review;
    reviews.stars = req.body.stars || reviews.stars;
    
    const updatedreviews = await reviews.save();
    res.status(201).json(updatedreviews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a reviews
exports.deletereviews = async (req, res) => {
  try {
    const reviews = await Reviews.findById(req.params.id);
    if (!reviews) return res.status(404).json({ message: 'reviews not found' });

    await reviews.deleteOne();
    res.json({ message: 'reviews deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};