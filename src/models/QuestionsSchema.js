const mongoose = require("mongoose");

const que_schema = new mongoose.Schema({
    question: {
        type: String
    },
    answerOptions: {
        type: [
            "Mixed"
        ]
    }
})

const Questions = mongoose.model("question", que_schema);
module.exports = Questions;