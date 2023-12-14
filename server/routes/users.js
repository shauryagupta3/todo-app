const express = require('express');
const router = express.Router();
const auth = require('../modules/auth')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { User, Task } = require('../models/index')
require('dotenv').config()
mongoose.connect("mongodb://localhost:27017").then(console.log("connected to mongodb"))


router.get('/', async (req, res) => {
    const USERS = await User.find()
    res.send(USERS).end()
});


router.post('/signup', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: await auth.hashPassword(req.body.password),
            name: req.body.name,
            email: req.body.email,
        })
        res.send(user).status(201).end()
    } catch (err) { console.log(err.message) }
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if (!user) res.status(400).send("user not found").end()
    const isMatch = await auth.comparePasswords(req.body.password, user.password)
    if (!isMatch) res.send("wrong password").status(400).end()
    const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
    res.json(token)
});

router.get('/protected', auth.verifyToken, (req, res) => {
    const user = {
        id: req.userID,
        name: req.username
    }
    res.send(user).status(201).end()
})


module.exports = router;
