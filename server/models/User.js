const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        name: String,
        email: String,
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        },
        updatedAt: {
            type: Date,
            default: () => Date.now()
        },
        tasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Task" }],
        habits: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Habit" }]
    }
)

module.exports = mongoose.model("User", userSchema)