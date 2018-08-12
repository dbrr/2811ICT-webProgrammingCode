
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

http.createServer(app).listen(3000);
console.log("Server started");

app.use(express.static(__dirname + '/www'));

app.get("/getData", function (req, res){
	res.send("<h1>Message</h1>");
});


app.get('/',function(req,res) {
	res.sendFile(__dirname + "/www/index.html");
});

app.get('/account',function(req,res) {
	res.sendFile(__dirname + "/account.html");
});

app.post('/login',function(req,res) {
	var user = req.body.user;
	var pass = req.body.password;
	
	//console.log(user, pass);
	if (user == "asdf" && pass == "123") {
		res.send(JSON.stringify({"ok": "true"}));
	}
	else {
		res.send(JSON.stringify({"ok": "false, errors{}"}));
	}
});


