const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGODB_URL

mongoose.connect(URL, {})

const connecton = mongoose.connection
connecton.once("open", () => {
        console.log('Mongodb connection success..!')
})

const post = require('./routes/post.js')
app.use("/post", post)

const user = require('./routes/user.js')
app.use("/user", user)

app.listen(PORT, () => {
     console.log(`Server is up and runnig on port number: ${PORT}`)
})