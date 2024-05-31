const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {type: String, required: true, unique: true},
    family: {type: String, required: true},
    price: {type: Number, required: true},
    reviews : { type: mongoose.Schema.Types.ObjectId, unique: true},
    isAvaliable : {type: Boolean}
})

module.exports = mongoose.model('Dog',DogSchema);