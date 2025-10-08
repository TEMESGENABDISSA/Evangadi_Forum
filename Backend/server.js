// const express = require("express");
// require("dotenv").config();

// const app = express();
// const cors = require("cors");

// app.use(cors());
// const port = 5000;

// // json middleware
// app.use(express.json());

// // db connection
// const dbconnection = require("./config/db");

// // import authentication middleware
// const Auth = require("./middleware/authMiddleware");

// // ---------------- ROUTES ----------------





// // answer routes
// const answerRoutes = require("./routes/answerRoutes");





// // answer middleware (protected )

// app.use("/api/answers/", Auth, answerRoutes);

// // ---------------- START SERVER ----------------
// async function start() {
//   try {
//     const result = await dbconnection.execute("select 'connected' ");
//     console.log(result[0]); // just to confirm DB ping

//     await app.listen(port);
//     console.log("Database connected");
//     console.log(`Listening at port ${port}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// start();



const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const questionRoutes = require("./routes/questionRoutes");
const answerRoutes = require("./routes/answerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);

// SERVER START
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
