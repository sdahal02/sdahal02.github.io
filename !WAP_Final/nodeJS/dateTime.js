//Implementing myModule in another file
var http = require('http');
var dt = require('./myModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "text/html" });
    res.write("Current Date and Time is: " + dt.myDate());
    res.end();
}).listen(8080);