var scoring = 0;
var	t = 0;
var line = null;

function colision_player()
{
	var c = 0;
	for (var i = 0; i < 2; i++)
	{
		var back = $(".back:eq("+i+")");
		back.children().each(function() {
			var a = parseInt($(this).css('top'))+parseInt(back.css('top'));
			var b = parseInt($(this).css('left'));
			if (player[2] >= (b - 30) && player[2] <= (b + 30) && player[3] >= (a - 9) && player[3] <= a)
			{
				scoring += 10;
				$(this).attr("src", "img/lineb.png");
				t = 10;
				line = this;
				c = 1;
			}
		});
	}
	return (c);
}

function move_ball()
{
	if (player[0] == -1)
	{
		player[5] = (player[1] / 10);
		player[1] += 1;
		if (colision_player() == 1)
		{
			player[0] = 1;
			player[5] = - (player[1] / 10);
		}
	}
	else if (player[0] == 1)
	{
		player[5] = - (player[1] / 10);
		if (player[3] <= 10)
			player[1] = 0;
		if ((player[1] -= 1) < 0)
		{
			player[0] = -1;
			player[5] = 0;
		}
	}
	player[3] += player[5];
	player[2] += player[4];
	$('#ball').animate({top: player[3], left: player[2]}, 10, function() {

		var v = "+=2";
		if (parseInt(player[0]) == 1)
			v = "-="+player[5];
		$('.back').animate({top: v},10,function(){
			if (parseInt($(".back:eq("+bac+")").css('top')) >= 600)
    			generat_map();
			});
	t--;
	if (t == 0)
	{
		$(line).attr("src", "img/line.png");
		line = null;
	}
	$("#score").text("score : "+scoring);
	move_ball();
	});
}