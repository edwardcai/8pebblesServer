var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.use(express.static(path.join(__dirname + '/public')));

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
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state2', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state3', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state4', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state5', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state6', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});

app.get('/state7', function(req, res){
	res.json({"Nick":message.charCodeAt(0)-48});
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
