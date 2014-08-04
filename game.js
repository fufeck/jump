//var height = 0;
//var player = array('x' => 0, 'y' => 0, 'height' => 0, 'state' => 0);
var bac = 0;
var player = Array(0, 0, 200, 200, 0, 0);
//state, h, x, y, xx, yy

move_back();
move_player();

$("body").keyup( function(e){
	if (e.which == 37)
		player[4] = 0;
	else if (e.which == 39)
		player[4] = 0;
});

$("body").keydown( function(e){

	if (e.which == 32 && player[0] == 0)
		player[0] = 1;
	else if (e.which == 37)
		player[4] = -2;
	else if (e.which == 39)
		player[4] = +2;
});
