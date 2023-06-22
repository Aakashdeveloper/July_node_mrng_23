let http = require('http');

//req > what we send to server (params,queryParmas, body)
//res > what we will get from server

let server = http.createServer(function(req,res){
    res.write('<h1>Hii From Nod Server Code</h1>');
    res.end()
})

server.listen(1771)