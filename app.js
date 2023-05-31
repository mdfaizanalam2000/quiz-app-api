const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("./src/db/conn");
const Questions = require("./src/models/QuestionsSchema");
const port = process.env.PORT || 80;
app.use(express.json());

app.post("/addQuestion", async (req, res) => {
  const user = new Questions({
    "question": req.body.question,
    "answerOptions": [
      {
        "answerText": req.body.answerOptions[0].answerText,
        "isCorrect": req.body.answerOptions[0].isCorrect
      },
      {
        "answerText": req.body.answerOptions[1].answerText,
        "isCorrect": req.body.answerOptions[1].isCorrect
      },
      {
        "answerText": req.body.answerOptions[2].answerText,
        "isCorrect": req.body.answerOptions[2].isCorrect
      },
      {
        "answerText": req.body.answerOptions[3].answerText,
        "isCorrect": req.body.answerOptions[3].isCorrect
      }
    ]
  })

  try {
    const quiz = await user.save();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

app.get("/questions", async (req, res) => {
  try {
    const questiondata = await Questions.find();
    res.send(questiondata)

  } catch (e) {
    res.send(e);
  }
})


app.listen(port, () => {
  console.log(`Connection established at port ${port}`);
})