const User = require('../models/user');

// Display list of all users
exports.user_list = (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => next(err));
};

// Handle user create on POST
exports.user_create_post = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password // Note: Hash the password in a real app
  });

  user.save()
    .then(() => res.status(201).json(user))
    .catch(err => next(err));
};