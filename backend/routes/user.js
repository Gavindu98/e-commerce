const express = require('express');
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.name,
            password: newPassword
        })
        res.json({ status: 'Ok' })
    }
    catch (err) {
        res.json({ status: 'error', error: err.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return { status: 'error', error: 'Invalid Login' }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        if (isPasswordValid) {
            const token = jet.sign(
                {
                    name: user.name,
                    email: user.email
                },
                'secret123'
            )
            return res.json({ status: 'Ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    }
    catch (err) {
        res.json({ status: 'error', error: err.message })
    }
})

module.exports = router;