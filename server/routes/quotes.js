const express = require('express');
const router = express.Router();
const { Quote } = require('../models/index')

router.get('/', async (req, res) => {
    const QUOTES = await Quote.find()
    res.send(QUOTES);
});

router.post('/', async (req, res) => {
    try {
        const quote = await Quote.create({
            quote: req.body.quote,
            character: req.body.character,
            anime: req.body.anime
        })
        res.send(quote).status(201).end()
    } catch (err) { console.log(err.message) }
});

router.get('/random', async (req, res) => {
    const QUOTES = await Quote.find()
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    res.send(JSON.stringify(QUOTES[randomIndex]));
});

module.exports = router;
