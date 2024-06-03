const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// Route to get all reviews
router.get('/read', reviewsController.getreviewss);

// Route to get a review by ID
router.get('/:id', reviewsController.getreviewsById);

// Route to create a new review
router.post('/create', reviewsController.createreviews);

// Route to update a review by ID
router.put('/update:id', reviewsController.updatereviews);

// Route to delete a review by ID
router.delete('/delete:id', reviewsController.deletereviews);

module.exports = router;