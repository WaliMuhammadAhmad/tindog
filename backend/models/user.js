const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, unique: true },
  address: { type: String, trim: true, lowercase: true },
  dob: { type: Date },
  pic: { type: String },
  payment: { type: String, default: 'cash' },
  cardNumber: { type: Number},
  cardName: { type: String},
  cvv: { type: Number},
  status: { type: String, enum: ['active', 'inactive', 'banned'], default: 'active' },
}, {
  timestamps: true,
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);