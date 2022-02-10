const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require("cryptjs");
import 'dotenv/config'


// import routes
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

//app middleware
app.use(bodyParser.json());
app.use(postRoutes);
app.use(userRoutes);

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const DB_URL = 'mongodb+srv://gavindu01:gavindu1998@cluster0.imj4b.mongodb.net/ecommerce?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection error', err))


app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))