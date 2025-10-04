// const mysql = require("mysql2");
// const dbconnection = mysql.createPool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   host: "localhost",
//   connectionLimit: 10,
// });

// module.exports = dbconnection.promise();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "sabita",
  password: "sabita",
  database: "forum",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected!");
});

module.exports = connection;

