const db = require("../config/db");

// ============ POST QUESTION ============
exports.postQuestion = (req, res) => {
  const {
    question,
    question_description,
    question_code_block,
    tags,
    post_id,
    user_id,
  } = req.body;

  if (!question || !post_id || !user_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const query = `
    INSERT INTO question (question, question_description, question_code_block, tags, post_id, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      question,
      question_description,
      question_code_block,
      tags,
      post_id,
      user_id,
    ],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Question posted successfully!" });
    }
  );
};

// ============ GET QUESTIONS ============
exports.getQuestions = (req, res) => {
  const query = `
    SELECT q.*, r.user_name
    FROM question q
    JOIN registration r ON q.user_id = r.user_id
    ORDER BY q.question_id DESC
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
