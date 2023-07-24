const mongoose = require('mongoose');


// Question schema 

const questionSchema = new mongoose.Schema({
    title: {//      title
        type: String,
        require: true,
        unique: true
    },
    options: [{//options to Question
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]

}, { timestamps: true });


const Question = mongoose.model('Question', questionSchema);
module.exports = Question;//export it