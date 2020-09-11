const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const AffirmationSchema = new Schema({
    quote: {
        type: String,
        required: true
    },
    quoteId: {
        type: Number
    },
    author: {
        type: String,
        require: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }] 
});

module.exports = mongoose.model('Affirmation', AffirmationSchema);