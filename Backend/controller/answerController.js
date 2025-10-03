const { StatusCodes } = require("http-status-codes");
const dbconnection = require("../db/dbConfig");

// -----------------------------------------------------------------------------
// Post Answer Controller
//-----------------------------------------------------------------------------
const postAnswer = async (req, res) => {
  try {
    const { questionid, answer } = req.body;
    const userid = req.user.userid; 
    // 1. Validate input
    if (!questionid || !answer || answer.trim() === "") {
      return res
        .status(StatusCodes.BAD_REQUEST) // 400
        .json({
          message: "Please provide answer",
        });
    }

    // 2. Insert answer into the database
    await dbconnection.execute(
      "INSERT INTO answers (questionid, answer, userid) VALUES (?, ?, ?)",
      [questionid, answer, userid]
    );

    // 3. Successful response
    return res
      .status(StatusCodes.CREATED) // 201
      .json({
        message: "Answer posted successfully",
      });
  } catch (error) {
    console.error("Error posting answer:", error.message);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR) // 500
      .json({
        message: "Something went wrong, please try again later!",
      });
  }
};

module.exports = { postAnswer };
