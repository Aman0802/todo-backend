const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenc.config();

// Importing ROUTES
const todoRoute = require("./routes/todo.route");

// MIDDLEWARE
app.use(express.json());

// Route Middlewares
app.use("/api/todos", todoRoute);

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server Started at port ${PORT}...`);
});
