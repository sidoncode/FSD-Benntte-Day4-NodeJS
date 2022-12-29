// we are required a protocol
var http = require('http');


// create a server


http.createServer(function (request,response) {

    // send the HTTP header
    // HTTP Status: 200 -> OK
    // content Type: text/plain

    response.writeHead(200,{'Content-Type': 'text/plain'});

    response.end('Hello, world');
}).listen(8081)

console.log("Server is running on the port no 8081")

