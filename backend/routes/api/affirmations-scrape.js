// const request = require('request')
// const cheerio = require('cheerio')
// const { get } = require('request')
// const express = require('express');
// const router = express.Router();
// // const db = require('../models')

// //Scraping from /motivationalquotes
// router.get('/', async (req, rest) => {
//     const URL = await 'https://www.goodreads.com/quotes/tag/motivational'

//     request(URL, (error, response, body) => {
//         let $ = cheerio.load(body)
//         let results = $('.quoteText')
//         let filteredResults = results.map((index, element) => {
//             let quote = $(element).find('div').text();
//         })
//         filteredResults = filteredResults.get()
//         console.log(filteredResults)
//     })
// })

// const URL = 'https://www.goodreads.com/quotes/tag/motivational'


// // TO TEST SCRAPING DATA
// //GET RID OF LATER
// // request(URL, (error, response, body) => {
// //     let $ = cheerio.load(body)
// //     let results = $('.quoteDetails')
// //     let filteredResults = results.map((index, element) => {
// //         let quote = $(element).find('div', '.quoteText').text();

// //         return {
// //             quote: quote
// //         }
// //     })
// //     filteredResults = filteredResults.get()
// //     console.log(filteredResults)
// // })


// module.exports = router;