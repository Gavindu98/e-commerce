const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Post = new mongoose.Schema(
    {
        topic: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
)
const ProductItem = mongoose.model("ProductItem", Post)

module.exports = ProductItem