const Admin = require('../models/admin');

// Get all admins
exports.getadmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single admin by ID
exports.getadminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new admin
exports.createadmin = async (req, res) => {
  const admin = new Admin({
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
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    // Update fields
    admin.name = req.body.name || admin.name;
    admin.password = req.body.password || admin.password;
    admin.role = req.body.role || admin.role;
    const updatedadmin = await admin.save();
    res.json(updatedadmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a admin
exports.deleteadmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    await admin.deleteOne();
    res.json({ message: 'Admin deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};