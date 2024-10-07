const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT;
app.use(cors());

app.get("/api/welcome", (req, res) => {
  res.json({ message: "Welcome to the To-Do App!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
