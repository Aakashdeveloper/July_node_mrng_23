let express = require('express');
let app = express();
let dotenv = require('dotenv')
dotenv.config();
let port = process.env.PORT || 8811;
let {dbConnect} = require('./src/controller/dbContoller');

let menu = [
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'}
]


let categoryRouter = require('./src/controller/categoryRouter')(menu)
let productRouter = require('./src/controller/productRouter')(menu)
//static file path
app.use(express.static(__dirname+'/public'))
//html/ejs file path
app.set('views','./src/views')
// view engine name
app.set('view engine','ejs')

//Default route
app.get('/',function(req,res){
    //res.send('Hii From Default Server')
    res.render('index',{title:'Home Page',menu})
})

app.use('/category',categoryRouter)
app.use('/products',productRouter)

// creating server
app.listen(port, function(err){
    if(err) throw err;
    dbConnect();
    console.log(`Running on port ${port}`)
})
