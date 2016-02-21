var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.use(express.static(path.join(__dirname + '/public')));



app.post('/', function(request, response) {
		console.log(request.body.input);
});

var message = "00000000"

io.on('connection', function(socket){
  io.emit('message', message);
  socket.on('message', function(msg){
  	console.log(msg);
    io.emit('message', msg);
		message = msg;
  });
});

app.get('/state0', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state1', function(req, res){
	res.json({"Nick":message.charCodeAt(1)-48});
});

app.get('/state2', function(req, res){
	res.json({"Nick":message.charCodeAt(2)-48});
});

app.get('/state3', function(req, res){
	res.json({"Nick":message.charCodeAt(3)-48});
});

app.get('/state4', function(req, res){
	res.json({"Nick":message.charCodeAt(4)-48});
});

app.get('/state5', function(req, res){
	res.json({"Nick":message.charCodeAt(5)-48});
});

app.get('/state6', function(req, res){
	res.json({"Nick":message.charCodeAt(6)-48});
});

app.get('/state7', function(req, res){
	res.json({"Nick":message.charCodeAt(7)-48});
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
