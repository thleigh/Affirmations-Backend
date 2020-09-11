require('dotenv').config();
const express = require('express');
const router = express.Router();
const Affirmation = require('../../models/Affirmation');

// POST /api/affirmations
// Post a new quote
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

// GET /api/affirmations
// Display all quotes
router.get('/', (req, res) => {
    Affirmation.find()
    .then(affirmations => {
        res.send(affirmations)
    })
    .catch(err => console.log(err))
})

// GET /api/affirmations/id
// Display a quote by id
router.get('/:id', (req, res) => {
    Affirmation.find({
        _id: req.params.id
    })
    .then(affirmation => {
        res.send(affirmation)
    })
    .catch(err => console.log(err))
})

// DELETE /api/affirmations/id
// Delete a quote
router.delete('/:id', (req,res) => {
    Affirmation.deleteOne({
        _id: req.params.id
    })
    .then(res.send('deleted'))
    .catch(err => console.log(err))
})

// PUT /api/affirmations/id
// Edit a quote
router.put('/:id', (req, res) => {
    Affirmation.findOneAndUpdate({
        _id:req.params.id
    },
    req.body, // Grab everything in the body     
    {
        new: true
    })
    .then(updatedAffirmation => {
        res.send(updatedAffirmation)
    })
    .catch(err => console.log(err))
})

// PUT /api/affirmations/likes/id
// Add a like
router.put('/likes/:id', (req, res) => {
    Affirmation.findOneAndUpdate({
        _id:req.params.id
    },
    {
        $push: {likes: req.body.likes}
    },
    {
        new: true
    })
    .then(updatedAffirmation => {
        res.send(updatedAffirmation)
    })
    .catch(err => console.log(err))
})

// PUT api/affirmations/unlikes/id
// Remove a like
router.put('/unlikes/:id', (req,res) => {
    Affirmation.findOneAndUpdate({
        _id:req.params.id
    },
    {
        $pull: {likes: req.body.likes}
    },
    {
        new: true
    })
    .then(updatedAffirmation => {
        res.send(updatedAffirmation)
    })
    .catch(err => console.log(err))
})

module.exports = router