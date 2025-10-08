const express = require("express");
const router = express.Router();
const {
  postQuestion,
  getQuestions,
} = require("../controller/questionController");

router.post("/", postQuestion);
router.get("/:question_id", getQuestions);

module.exports = router;
