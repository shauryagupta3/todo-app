const express = require('express');
const router = express.Router();
const quotes = require('../quotes.json');

router.get('/', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(quotes));
});

router.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.quotes.length);
    res.send(JSON.stringify(quotes.quotes[randomIndex]));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(JSON.stringify(quotes.quotes[id]));
});

module.exports = router;
