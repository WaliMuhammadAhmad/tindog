const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Route to get all admins
router.get('/read', adminController.getadmins);

// Route to get a admin by ID
router.get('/:id', adminController.getadminById);

// Route to create a new admin
router.post('/create', adminController.createadmin);

// Route to update a admin by ID
router.put('/update:id', adminController.updateadmin);

// Route to delete a admin by ID
router.delete('/delete:id', adminController.deleteadmin);

module.exports = router;