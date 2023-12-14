const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        name: String,
        deadline: String,
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        },
        priority: Number,
        user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" }
    }
)

module.exports = mongoose.model("Task", taskSchema)