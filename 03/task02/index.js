
var express = require('express');
var http = require('http');
var app = express();

http.createServer(app).listen(3000);
console.log("Server started");

app.get('/',function(req,res) {
	res.sendFile(__dirname + "/index.html");
});
