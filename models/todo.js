const mongoose = require("mongoose")

module.exports = mongoose.model("todo", new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "auth", required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
}))