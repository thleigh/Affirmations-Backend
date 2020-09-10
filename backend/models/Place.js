const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const placeSchema = new Schema ({
  
    City: {
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
    Lng: {
        type: Number
    }
})

module.exports = mongoose.model('Place', PlaceSchema);