const express = require('express');
let productRouter = express.Router();
const {getData} = require('./dbContoller');
let mongo = require('mongodb');

function router(menu){

    productRouter.route('/')
        .get(async(req,res) => {
        let query = {};
        let products = await getData('products',query)
        res.render('products',{title:'Products page',products,menu})
    })

    productRouter.route('/category/:id')
        .get(async(req,res) => {
            //let id = req.params.id
            let {id} = req.params
            let query = {"category_id":Number(id)}
            let products = await getData('products',query)
            res.render('products',{title:'Products Listing page',products,menu})
        })


    productRouter.route('/details/:id')
        .get(async (req,res) => {
        let _id = req.params.id;
        let query = {"_id":mongo.ObjectId(_id)}
        let products = await getData('products',query)
        res.render('products',{title:'Products Details page',products,menu})
    })

    return productRouter
    
}


module.exports = router