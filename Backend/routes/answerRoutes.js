// const express = require("express");
// // Imports the controller functions for answer operations
// const { postAnswer } = require("../controller/answerController");
// // Import Auth middleware
// const Auth = require("../middleware/authMiddleware");
// const router = express.Router();

// router.post("/answer", Auth, postAnswer);

// module.exports = router;


// const express from "express";
const express = require("express");
const router = express.Router();
const { postAnswer, getAnswers } = require("../controller/answerController");

router.post("/", postAnswer);
router.get("/:question_id", getAnswers);

module.exports = router;
