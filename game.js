var bac = 0;
var player = Array(-1, 0, 180, 20, 0, 0);

function startGame() {
	bac = 0;
	player = Array(-1, 0, 180, 20, 0, 0);


	generat_map();
	generat_map();
	move_ball();

	$("body").keyup( function(e){
		if (e.which == 37)
			player[4] = 0;
		else if (e.which == 39)
			player[4] = 0;
	});

	$("body").keydown( function(e){

		if (e.which == 37)
			player[4] = -2;
		else if (e.which == 39)
			player[4] = +2;
	});
}

$("#start h1").click( function() {
	$("#start").css({"opacity": 0});
	startGame();
});