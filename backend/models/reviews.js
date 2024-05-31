const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    dogId: { type: mongoose.Schema.Types.ObjectId, ref: "Dog", required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    userName: {type: String, ref: "User", required: true},
    review: {type: String, required: true, trim: true, lowercase: true},
    stars : {type: Number, required: true},
});

module.exports = mongoose.model('Review',ReviewSchema);