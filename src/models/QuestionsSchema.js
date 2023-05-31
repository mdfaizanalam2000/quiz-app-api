const mongoose = require("mongoose");

const que_schema = new mongoose.Schema({
    Ques: {
        type: String,
        required: true
    },
    O1: {
        type: String,
        required: true
    },
    O2: {
        type: String,
        required: true
    },
    O3: {
        type: String,
        required: true
    },
    O4: {
        type: String,
        required: true
    },
    correct: {
        type: String,
        required: true
    }
})

const Questions = mongoose.model("question", que_schema);
module.exports = Questions;