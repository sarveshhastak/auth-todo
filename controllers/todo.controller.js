const asyncHandler = require("express-async-handler")
const todo = require("../models/todo")

exports.createTodo = asyncHandler(async (req, res) => {
    await todo.create({ ...req.body, user: req.loggInUser })
    res.json({ message: "Todo Create Success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    const result = await todo.find({ user: req.loggInUser })
    res.json({ message: "Todo Read Success", result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    await todo.findByIdAndUpdate(req.params.tid, req.body)
    res.json({ message: "Todo Update Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await todo.findByIdAndDelete(req.params.tid)
    res.json({ message: "Todo Delete Success" })
})