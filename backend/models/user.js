const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }
)

const UserData = mongoose.model("UserData", User)

module.exports = UserData