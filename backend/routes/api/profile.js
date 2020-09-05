const db = require('../../models');
const express = require('express');
const router = express.Router();

// get route for user details
// GET all quotes that a user commented on and that a user has liked


router.get('/', (req, res) => {
    db.Users.findById()
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        console.log(err, "can't find user")
    })
})









module.exports = router

