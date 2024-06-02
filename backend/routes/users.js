const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/read', userController.getAllUsers);

// Route to get a user by ID
router.get('/:id', userController.getUserById);

// Route to create a new user
router.post('/create', userController.createUser);

// Route to update a user by ID
router.put('/update:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/delete:id', userController.deleteUser);

module.exports = router;