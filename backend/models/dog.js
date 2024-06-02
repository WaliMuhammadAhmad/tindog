const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: {type: String, required: true, unique: true},
    family: {type: String, required: true},
    price: {type: Number, required: true},
    pic : {type: String, required: true, trim: true},
    status: { type: String, enum: ['avalaible', 'no'], default: 'avaliable' },
})

module.exports = mongoose.model('Dog',DogSchema);