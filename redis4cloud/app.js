import express from 'express';
import axios from 'axios';
import {createClient} from 'redis';
let port = 7011;
let app = express();

let client = createClient({
    password: 'EmF1pnbkFZZHagBtyJMxEZLjqxGoL5OZ',
    socket: {
        host: 'redis-13076.c74.us-east-1-4.ec2.cloud.redislabs.com',
        port: 13076
    }
})

client.on('error',err => console.log(`Redis Client Error`,err))

app.get('/data',async(req,res) => {
    await client.connect();
    let userInput = req.query.country.trim();
    userInput = userInput?userInput:'India';
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`;
    let result = await client.get(userInput)
    if(result){
        const output = JSON.parse(result);
        res.send(output);
    }else{
        let apiResponse = await axios.get(url);
        const output = apiResponse.data;
        await client.set(userInput,JSON.stringify({source:'Redis Cache',output}),{EX:10,NX:true});
        res.send({source:'Api Response',output})
    }

    await client.disconnect()
})

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})