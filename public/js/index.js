function drawCircle(x,y,isFilled) {
	alert ("hi");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath()
	ctx.arc(x,y,40,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}

$(function(){
	var iosocket = io.connect();
	iosocket.on('connect', function () {
		$('#incomingChatMessages').append($('<li>Connected</li>'));
		iosocket.on('message', function(message) {
			alert("hi");
			$('#incomingChatMessages').append($('<li></li>').text(message));
			drawCircle(50, 95, true);
		});
		iosocket.on('disconnect', function() {
			$('#incomingChatMessages').append('<li>Disconnected</li>');
		});
	});
	$('#outgoingChatMessage').keypress(function(event) {
		if(event.which == 13) {
			event.preventDefault();
			iosocket.send($('#outgoingChatMessage').val());
			$('#incomingChatMessages').append($('<li></li>').text($('#outgoingChatMessage').val()));
			$('#outgoingChatMessage').val('');
		}
	});
});
