const mongoose = require('mongoose');

// option schema 
 const optionSchema = new mongoose.Schema({
    text: {         // text value of option
        type: String,
        required: true
    },
    votes: { //no of votes to this option
        type: Number,
        default: 0
    },
    link_to_vote: {//link to give vote
        type: String
    },
    question_id: {//question id of that option
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }
}, { timestamps: true });

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;//export it