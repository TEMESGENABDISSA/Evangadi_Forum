require("dotenv").config(); // Make sure to load environment variables
const mysql2 = require("mysql2");

// Create a connection pool (correct function)
const databaseconnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 20,
  queueLimit: 0,
});

// Test DB connection
databaseconnection.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database!");
    connection.release();
  }
});

// SQL statements
const registration = `
CREATE TABLE IF NOT EXISTS registration (
    user_id INT AUTO_INCREMENT,
    user_name VARCHAR(200) NOT NULL,
    user_email VARCHAR(200) NOT NULL,
    user_password VARCHAR(200) NOT NULL,
    PRIMARY KEY (user_id)
);
`;

const profile = `
CREATE TABLE IF NOT EXISTS profile (
    user_profile_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    PRIMARY KEY (user_profile_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
);
`;

const question = `
CREATE TABLE IF NOT EXISTS question (
    question_id INT AUTO_INCREMENT,
    question VARCHAR(300) NOT NULL,
    question_description VARCHAR(300),
    question_code_block VARCHAR(300),
    tags VARCHAR(200),
    post_id VARCHAR(300) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (question_id),
    UNIQUE KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id)
);
`;

const answer = `
CREATE TABLE IF NOT EXISTS answer (
    answer_id INT AUTO_INCREMENT,
    answer VARCHAR(300) NOT NULL,
    answer_code_block VARCHAR(300),
    user_id INT NOT NULL,
    question_id INT NOT NULL,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (user_id) REFERENCES registration(user_id),
    FOREIGN KEY (question_id) REFERENCES question(question_id)
);
`;

// Create tables sequentially to avoid foreign key errors
const createTables = async () => {
  try {
    await databaseconnection.promise().query(registration);
    console.log("✅ Registration table created");

    await databaseconnection.promise().query(profile);
    console.log("✅ Profile table created");

    await databaseconnection.promise().query(question);
    console.log("✅ Question table created");

    await databaseconnection.promise().query(answer);
    console.log("✅ Answer table created");

    console.log("🎉 All tables created successfully!");
  } catch (err) {
    console.error("❌ Error creating tables:", err.message);
  }
};

createTables();

module.exports = databaseconnection;
