const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const AdminSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: { type: String, enum: ['admin', 'SuperAdmin'], default: 'admin' },
},
{
    timestamps: true,
});

UserSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });

module.exports = mongoose.model('Admin', AdminSchema);