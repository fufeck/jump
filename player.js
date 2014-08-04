function colision_player()
{
	var c = 0;
	for (var i = 0; i < 2; i++)
	{
		var back = $(".back:eq("+i+")");
		console.log(back);
		back.children().each(function() {
			var a = parseInt($(this).css('top'))+parseInt(back.css('top'));
			var b = parseInt($(this).css('left'));
			if (player[2] >= (b - 10) && player[2] <= (b + 10) && player[3] >= (a - 9) && player[3] <= a)
				c = 1;
		});
	}
	return (c);
}

function move_player()
{
	if (player[0] == 1)
	{
		player[5] = -10;
		player[1] += 10;
		if (player[1] > 150)
		{
			player[1] = 0;
			player[0] = -1;
		}
	}	
	else if (player[0] == -1)
	{
		player[5] = 5;
		console.log(colision_player());
		if (colision_player() == 1)
		{
			player[0] = 0;
			player[5] = 1;
		}
	}
	else if (player[0] == 0)
	{
		player[5] = 1;
		if (colision_player() == 0)
		{
			player[0] = -1;
			player[5] = 5;
		}
	}
	player[3] += player[5];
	player[2] += player[4];
	$('#player').animate({top: player[3], left: player[2]}, 10, function() {
	    move_player();
	});
}