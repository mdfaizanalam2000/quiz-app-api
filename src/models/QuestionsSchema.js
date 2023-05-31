const mongoose = require("mongoose");

const que_schema = new mongoose.Schema({
    category: {
        type: String
    },
    question: {
        type: String
    },
    answerOptions: {
        type: []
    }
})

const Questions = mongoose.model("question", que_schema);
module.exports = Questions;