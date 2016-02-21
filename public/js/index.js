var message = "";
var socket = io();

var canvas = document.getElementById('myCanvas'),
    canvasLeft = canvas.offsetLeft,
    canvasTop = canvas.offsetTop,
    ctx = canvas.getContext('2d'),
    elements = [];


canvas.addEventListener('click', function(event) {
	if(event.offsetX) {
  	mouseX = event.offsetX;
  	mouseY = event.offsetY;
  }
  else if(event.layerX) {
  	mouseX = event.layerX;
  	mouseY = event.layerY;
  }
	for (i = 0; i < 8; i++) {
		var x = ((i%2) * 150) + 50;
		var y = (Math.floor(i/2) * 180) + 50;
		if (mouseX < x + 60 && mouseX > x && mouseY < y + 75 && mouseY > y)
		{
			var isFilled = (message.charAt(i) == '0')?"1":"0";
			message = message.substring(0, i) + isFilled + message.substring(i+1, 8);
			socket.emit('message', message);
		}	
	}
}, false);

function drawCircle(x,y,isFilled) {
	ctx.beginPath();
	ctx.lineWidth = 20;
	ctx.beginPath();
	ctx.rect(x, y, 60, 75);
	ctx.fillStyle = "black";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(x+7,y+7,46,61);
	ctx.fillStyle = "white";
	if (isFilled) {ctx.fillStyle = "red";}
	ctx.fill();

	ctx.beginPath();
	ctx.rect(x+10,y+80,40,20);
	ctx.rect(x+10,y-25,40,20);
	ctx.fillStyle = "gray";
	ctx.fill();

	ctx.closePath();
}

function drawCircles(message) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,c.width, c.height);
	for (i = 0; i < 8; i++) {
		isFilled = (message.charAt(i) == '1');
		var x = ((i%2) * 150) + 50;
		var y = (Math.floor(i/2) * 180) + 50;
		drawCircle(x,y,isFilled);
	}
}

$(function(){
	drawCircles("00000000");
});

socket.on('message', function(msg){
	message = msg;
	drawCircles(msg);
});
