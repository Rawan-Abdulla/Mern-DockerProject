const mongoose = require('mongoose')
const Schema = mongoose.Schema

const food = new Schema(
    {
        rec: { type: String, required: true },
        ing: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('food', food)