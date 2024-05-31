const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    superAdmin: {type: Boolean}
},
{
    timestamps: true,
});

module.exports = mongoose.model('Admin', AdminSchema);