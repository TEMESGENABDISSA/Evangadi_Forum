import express from "express";
import db from "./db";

const app = express();

// Test route
app.get("/", (req, res) => {
  res.send("Backend running and database connected ✅");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
