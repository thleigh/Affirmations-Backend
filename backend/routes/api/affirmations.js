const express = require('express');
const router = express.Router();
const db = require('../../models');
const Affirmation = require('../../models/Affirmation');

// POST /api/affirmations
router.post('/', (req, res) => {
    const newAffirmation = new Affirmation({
        quote: req.body.quote,
        author: req.body.author
    })
    newAffirmation.save()
    .then(createdAffirmation => {
        res.json(createdAffirmation)
    })
    .catch(err => console.log(err))
})

module.exports = router