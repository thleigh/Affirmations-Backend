const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const commentSchema = new Schema ({
  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    // username: {
    //     type: String,
    //     ref:
    // }
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

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

    }],
    comments: [commentSchema]
 
});

module.exports = mongoose.model('comment', commentSchema);
module.exports = mongoose.model('Affirmation', AffirmationSchema);