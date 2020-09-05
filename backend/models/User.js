const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    volunteer: {
        type: Boolean
    },
    phoneNumber: {
        type: String
    },
    location: {
        type: String
    },
    mood: {
        type: Number
    }
});

module.exports = mongoose.model('User', UserSchema);