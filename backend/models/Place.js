const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const placeSchema = new Schema ({
  
    city: {
        type: String
    },
    State: {
        type: String
    },
    Poi: {
        type: String
    },
    Lat: {
        type: Number
    },
    Log: {
        type: Number
    }
})

module.exports = mongoose.model('Place', PlaceSchema);