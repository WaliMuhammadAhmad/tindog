const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogController');

// Route to get all dogs
router.get('/read', dogController.getdogs);

// Route to get a dog by ID
router.get('/:id', dogController.getdogById);

// Route to create a new dog
router.post('/create', dogController.createdog);

// Route to update a dog by ID
router.put('/update:id', dogController.updatedog);

// Route to delete a dog by ID
router.delete('/delete:id', dogController.deletedog);

module.exports = router;