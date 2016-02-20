function drawCircle(x,y,isFilled) {
	alert ("hi");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath()
	ctx.arc(x,y,40,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

var socket = io();
$('form').submit(function(){
	socket.emit('message', $('#m').val());
	$('#m').val('');
	return false;
});
socket.on('message', function(msg){
});
