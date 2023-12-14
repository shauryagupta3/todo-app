const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema(
    {
        quote: String,
        character: String,
        anime: String,
        createdAt: {
            type: Date,
            immutable: true,
            default: () => Date.now()
        }
    }
)

module.exports = mongoose.model("Quote", QuoteSchema)