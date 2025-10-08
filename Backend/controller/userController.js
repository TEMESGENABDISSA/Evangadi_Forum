const bcrypt = require("bcrypt");
const db = require("../config/db");

// ============ REGISTER ============
exports.registerUser = async (req, res) => {
  try {
    const { user_name, user_email, user_password, first_name, last_name } =
      req.body;

    if (
      !user_name ||
      !user_email ||
      !user_password ||
      !first_name ||
      !last_name
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
  // if (user_name.length > 0 || user_email.length > 0) {
  //   return res
  //     .status(409) // 409 Conflict: resource already exists
  //     .json({ message: "User already registered." });
  // }
    const hashedPassword = await bcrypt.hash(user_password, 10);

    const registerQuery = `
      INSERT INTO registration (user_name, user_email, user_password)
      VALUES (?, ?, ?)
    `;

    db.query(
      registerQuery,
      [user_name, user_email, hashedPassword],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        const user_id = result.insertId;

        const profileQuery = `
        INSERT INTO profile (user_id, first_name, last_name)
        VALUES (?, ?, ?)
      `;
        db.query(profileQuery, [user_id, first_name, last_name], (err2) => {
          if (err2) return res.status(500).json({ error: err2.message });
          res.status(201).json({ message: "User registered successfully!" });
        });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ============ LOGIN ============
exports.loginUser = (req, res) => {
  const { user_email, user_password } = req.body;

  if (!user_email || !user_password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const loginQuery = `SELECT * FROM registration WHERE user_email = ?`;

  db.query(loginQuery, [user_email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(user_password, user.user_password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res
      .status(200)
      .json({ message: "Login successful", user_id: user.user_id });
  });
};
