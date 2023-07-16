let express = require('express');
let app = express();
let mongo = require('mongodb');
let dotenv  = require('dotenv');
dotenv.config();
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT;
let {dbConnect,getData} = require('./controller/dbController')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

//heart beat
app.get('/',(req,res) => {
    res.status(200).send('Health ok')
});

//list of city
app.get('/location',async(req,res) => {
    let query = {};
    let collection = 'location';
    let output = await getData(collection,query);
    res.send(output)
})


//list of rest
app.get('/restaurants',async(req,res) => {
    let query = {};
    let stateId = Number(req.query.stateId);
    let mealId = Number(req.query.mealId);
    if(stateId && mealId){
        query = {
            state_id:stateId,
            "mealTypes.mealtype_id":mealId
        }
    }
    else if(stateId){
        query = {
            state_id:stateId
        }
    }else if(mealId){
        query = {
            "mealTypes.mealtype_id":mealId
        }
    }
    let collection = 'restaurants';
    let output = await getData(collection,query);
    res.send(output)
})


//mealType
app.get('/mealType',async(req,res) => {
    let query = {};
    let collection = 'mealType';
    let output = await getData(collection,query);
    res.send(output)
})


app.listen(port,() => {
    dbConnect()
    console.log(`Listing to port ${port}`)
})
