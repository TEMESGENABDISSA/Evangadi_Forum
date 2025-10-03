const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(cors());



// json middleware
app.use(express.json());
// answer routes
const answerRoutes = require("./routes/answerRoutes");
// answer middleware (protected )

app.use("/api/answers/", Auth, answerRoutes);