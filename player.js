function move_player()
{
	x = parseInt($('#player').css('left'));
	y = parseInt($('#player').css('top'));

	if (jump_state > -1)
		jump_state++;
	if (jump_state >= 40)
	{
		jump = 0;
		jump_state = -1;
	}
	if (jump_state > -1 && jump_state <= 20)
		jump = -10;
	if (jump_state > 20)
	{
		if (map[y / 40][x / 40] == 1)
		{
			jump = 0;
			jump_state = -1;
		}
		jump = +10;
	}
	$('#player').animate({top: y+=jump, left: x+=move}, 10, function() {
	    move_player();
	});
}