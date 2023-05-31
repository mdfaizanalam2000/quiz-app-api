const mongoose = require("mongoose");

const db = "mongodb+srv://mdfaizanalam:quizapi@cluster0.sy86ptd.mongodb.net/quiz-api?retryWrites=true&w=majority";
mongoose.connect(db, {
   useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
   console.log("connection successsful");
}).catch((e) => {
   console.log(e);
})