const express = require('express');
let categoryRouter = express.Router();
const {getData}  = require('./dbContoller');

function router(menu){
    //default route of category
    categoryRouter.route('/')
        .get(async(req,res) => {
            let query = {};
            let data = await getData('category',query)
            res.render('category',{title:'Category Page',catData:data,menu})
        })

    categoryRouter.route('/details')
        .get((req,res) => {
            res.send('This is category details')
        })

    return categoryRouter
}

module.exports = router