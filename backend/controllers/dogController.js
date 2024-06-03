const Dog = require('../models/dog');

// Get all dogs
exports.getdogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    if (!dogs) return res.status(404).json({ message: 'No dogs in DB' });
    res.status(200).json(dogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single dog by ID
exports.getdogById = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) return res.status(404).json({ message: 'dog not found' });
    res.status(200).json(dog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new dog
exports.createdog = async (req, res) => {
  const dog = new Dog({
    name: req.body.name,
    family: req.body.family,
    price: req.body.price,
    pic: req.body.pic,
  });
  try {
    const newdog = await dog.save();
    res.status(201).json(newdog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a dog
exports.updatedog = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) return res.status(404).json({ message: 'dog not found' });

    // Update fields
    dog.name = req.body.name || dog.name;
    dog.family = req.body.family || dog.family;
    dog.price = req.body.price || dog.price;
    dog.pic = req.body.pic || dog.pic;
    dog.status = req.body.status || dog.status;

    const updateddog = await dog.save();
    res.json(updateddog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a dog
exports.deletedog = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) return res.status(404).json({ message: 'dog not found' });

    await dog.deleteOne();
    res.json({ message: 'dog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};