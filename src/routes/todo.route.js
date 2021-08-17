const router = require("express").Router();

const todoController = require("../controllers/todo.controller");

router.get("/", (req, res) => todoController.getTodos);

module.exports = router;
