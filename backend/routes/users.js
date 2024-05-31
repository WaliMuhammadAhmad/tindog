const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET request for list of all users
router.get('/', userController.user_list);

// POST request for creating a user
router.post('/', userController.user_create_post);

module.exports = router;