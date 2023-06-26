const express = require('express');
let productRouter = express.Router();


const Products = [
    {
        "id": 1,
        "product_name": "Girls top",
        "category": "Fashion",
        "category_id": 1,
        "Price": 2000,
        "Size": "Small",
        "Image": "https://i.ibb.co/fHj5Tgc/download.jpg",
        "Color": "Maroon",
        "Brand": "Gucci"
    },
    {
        "id": 2,
        "product_name": "Girls top",
        "category": "Fashion",
        "category_id": 1,
        "Price": 1500,
        "Size": "Medium",
        "Image": "https://i.ibb.co/tsXyK5Y/images.jpg",
        "Color": "Blue",
        "Brand": "Westside"
    },
    {
        "id": 3,
        "product_name": "Girls top",
        "category": "Fashion",
        "category_id": 1,
        "Price": 2000,
        "Size": "Large",
        "Image": "https://i.ibb.co/NsVKKdd/images-1.jpg",
        "Color": "Pink",
        "Brand": "H&M"
    },
    {
        "id": 4,
        "product_name": "Girls top",
        "category": "Fashion",
        "category_id": 1,
        "Price": 500,
        "Size": "Medium",
        "Image": "https://i.ibb.co/5Fwh8ys/Blue.jpg",
        "Color": "Blue",
        "Brand": "H&M"
    },
    {
        "id": 5,
        "product_name": "Girls top",
        "category": "Fashion",
        "category_id": 1,
        "Price": 2500,
        "Size": "Large",
        "Image": "https://i.ibb.co/sbtyWMs/WHite.jpg",
        "Color": "White",
        "Brand": "Gucci"
    }
]
productRouter.route('/')
    .get((req,res) => {
        res.send(Products)
    })

productRouter.route('/details')
    .get((req,res) => {
        res.send('This is product details')
    })

module.exports = productRouter