const db = require('../../models');
const express = require('express');
const router = express.Router();

const mbxGeocoding= require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN})

router.get('/',(req,res)=>{
    geocodingClient.forwardGeocode({
        query: `${req.query.city},${req.query.state}, ${req.query.poi}`
    })
    // .send()
    .then(response=>{
        let match = response.body.features[0]

        console.log("match", match)
        console.log(match.center)
        res.send({match, mapKey:process.env.MAPBOX_TOKEN, city:req.query.city, state:req.query.state})
    })
    .catch(err=>{
        console.log(err)
        res.send('Error',err)
    })

})

module.exports = router;