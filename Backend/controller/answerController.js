// const { StatusCodes } = require("http-status-codes");
// const dbconnection = require("../config/db");

// // -----------------------------------------------------------------------------
// // Post Answer Controller
// //-----------------------------------------------------------------------------
// const postAnswer = async (req, res) => {
//   try {
//     const { questionid, answer } = req.body;
//     const userid = req.user.userid;
//     // 1. Validate input
//     if (!questionid || !answer || answer.trim() === "") {
//       return res
//         .status(StatusCodes.BAD_REQUEST) // 400
//         .json({
//           message: "Please provide answer",
//         });
//     }

//     // 2. Insert answer into the database
//     await dbconnection.execute(
//       "INSERT INTO answers (questionid, answer, userid) VALUES (?, ?, ?)",
//       [questionid, answer, userid]
//     );

//     // 3. Successful response
//     return res
//       .status(StatusCodes.CREATED) // 201
//       .json({
//         message: "Answer posted successfully",
//       });
//   } catch (error) {
//     console.error("Error posting answer:", error.message);

//     return res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR) // 500
//       .json({
//         message: "Something went wrong, please try again later!",
//       });
//   }
// };

// module.exports = { postAnswer };


const db = require("../config/db");

// ============ POST ANSWER ============
exports.postAnswer = (req, res) => {
  const { answer, answer_code_block, user_id, question_id } = req.body;

  if (!answer || !user_id || !question_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = `
    INSERT INTO answer (answer, answer_code_block, user_id, question_id)
    VALUES (?, ?, ?, ?)
  `;
  db.query(query, [answer, answer_code_block, user_id, question_id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Answer posted successfully!" });
  });
};

// ============ GET ANSWERS ============
exports.getAnswers = (req, res) => {
  const { question_id } = req.params;

  const query = `
    SELECT a.*, r.user_name
    FROM answer a
    JOIN registration r ON a.user_id = r.user_id
    WHERE a.question_id = ?
    ORDER BY a.answer_id DESC
  `;
  db.query(query, [question_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
