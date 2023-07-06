import express from 'express';
import { createClient } from 'redis';
import { MongoClient } from 'mongodb';
import e from 'express';
const url = "mongodb://127.0.0.1:27017";
const mClient = new MongoClient(url);
const rclient = createClient({host: 'localhost', port:6379});

let port = 7011;
let app = express();

//connecting redis
rclient.on('error',err=>console.log(`Redis Client Error`,err))

//connecting Mongo
async function main(){
    await mClient.connect()
}

const collection = mClient.db('julynode').collection('products');

app.get('/data',async(req,res) => {
    await rclient.connect();
    let userInput = req.query.color.trim();
    userInput = userInput?userInput:'White';
    let result = await rclient.get(userInput)
    if(result){
        const output = JSON.parse(result);
        res.send(output); 
    }else{
        // as data is not in redis fetch from mongo
        const output = [];
        const cursor = collection.find({Color:userInput});
        for await (const data of cursor){
            output.push(data)
        }
        await rclient.set(userInput,JSON.stringify({source:'Redis Cache',output}),{EX:10,NX:true});
        cursor.closed
        res.send({source:'Mongodb',output})
    }

    await rclient.disconnect();
})


app.listen(port,() => {
    main()
    console.log(`Running on port ${port}`)
})