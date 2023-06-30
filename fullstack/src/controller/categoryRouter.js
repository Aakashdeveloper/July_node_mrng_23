const express = require('express');
let categoryRouter = express.Router();
const {getData}  = require('./dbContoller');

//default route of category
categoryRouter.route('/')
    .get(async(req,res) => {
        let query = {};
        let data = await getData('category',query)
        res.render('category',{title:'Category Page',catData:data})
    })

categoryRouter.route('/details')
    .get((req,res) => {
        res.send('This is category details')
    })

module.exports = categoryRouter