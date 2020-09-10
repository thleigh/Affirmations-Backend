const db = require('../../models');
const express = require('express');
const router = express.Router();

const mbxGeocoding= require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingClient = mbxGeocoding({accessToken: process.env.MAPBOX_TOKEN})

router.post('/',(req,res)=>{
    console.log(`HERES THE QUERY INFO${req.body.city},${req.body.state}, ${req.body.poi}`)
    geocodingClient.forwardGeocode({
        query: `${req.body.city},${req.body.state}, ${req.body.poi}`
    })
    .send()
    .then(response=>{
        console.log('response.body', response.body)
        // let match = response.body.features[0]
        let match = response.body.features.slice(0, 6)

        console.log("match", match)
        // console.log(match.center)
        res.send({match, mapKey:process.env.MAPBOX_TOKEN, city:req.body.city, state:req.body.state})
    })
    .catch(err=>{
        console.log(err)
        res.send('Error',err)
    })
})

module.exports = router;