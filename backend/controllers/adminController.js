const admin = require('../models/admin');

// Get all admins
exports.getadmins = async (req, res) => {
  try {
    const admins = await admin.find();
    if (!admin) return res.status(404).json({ message: 'No admins in DB' });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single admin by ID
exports.getadminById = async (req, res) => {
  try {
    const admin = await admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'admin not found' });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new admin
exports.createadmin = async (req, res) => {
  const admin = new admin({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newadmin = await admin.save();
    res.status(201).json(newadmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a admin
exports.updateadmin = async (req, res) => {
  try {
    const admin = await admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'admin not found' });

    // Update fields
    admin.name = req.body.name || admin.name;
    admin.password = req.body.password || admin.password;

    const updatedadmin = await admin.save();
    res.json(updatedadmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a admin
exports.deleteadmin = async (req, res) => {
  try {
    const admin = await admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'admin not found' });

    await admin.remove();
    res.json({ message: 'admin deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};