const express = require('express');
let productRouter = express.Router();
const {getData} = require('./dbContoller');


productRouter.route('/')
    .get(async(req,res) => {
        let query = {};
        let products = await getData('products',query)
        res.render('products',{title:'Products page',products})
    })

productRouter.route('/details')
    .get((req,res) => {
        res.send('This is product details')
    })

module.exports = productRouter