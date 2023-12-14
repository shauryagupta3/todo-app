const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema(
    {
        name: String,
        days: String,
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        },
        user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" }
    }
)

module.exports = mongoose.model("Habit", habitSchema)