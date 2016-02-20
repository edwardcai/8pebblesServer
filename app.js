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

app.get('/state', function(req, res){
	res.json({"Nick":"Does This Work?"});
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
