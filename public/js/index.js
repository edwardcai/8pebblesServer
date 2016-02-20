function drawCircle(x,y,isFilled) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 20;
	ctx.beginPath();
	ctx.rect(x-5, y-5, 60, 75);
	ctx.fillStyle = "black";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(x+2,y+2,46,61);
	ctx.fillStyle = "white";
	if (isFilled) {ctx.fillStyle = "red";}
	ctx.fill();

	ctx.beginPath();
	ctx.rect(x+5,y+75,40,20);
	ctx.rect(x+5,y-30,40,20);
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
		var x = ((i%2) * 120) + 50;
		var y = (Math.floor(i/2) * 150) + 50;
		drawCircle(x,y,isFilled);
	}
}

$(function(){
	drawCircles("00000000");
});

var socket = io();
$('form').submit(function(){
	socket.emit('message', $('#m').val());
	$('#m').val('');
	return false;
});
socket.on('message', function(msg){
	drawCircles(msg);
});
