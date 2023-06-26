let express = require('express');
let app = express();
let port = 8811;
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');

//routes

//Default route
app.get('/',function(req,res){
    res.send('Hii From Default Server')
})

app.use('/category',categoryRouter)
app.use('/products',productRouter)

// creating server
app.listen(port, function(err){
    if(err) throw err;
    console.log('Running on port 8811')
})