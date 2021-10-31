const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send(`
        <h1>Individual Article</h1>
        <p>A single article will go here...</p>
    `);
});

module.exports = router;
