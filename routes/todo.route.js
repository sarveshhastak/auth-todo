const { createTodo, readTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()
router
    .post("/create", createTodo)
    .get("/read", readTodo)
    .patch("/update/:tid", updateTodo)
    .delete("/delete/:tid", deleteTodo)
module.exports = router