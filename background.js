function generat_map()
{
	$(".back:eq("+bac+")").empty();
	for (var y = 0; y < 10; y++)
	{
		for (var x = 0; x < 5; x++)
		{
			
			if (Math.floor((Math.random() * 10) + 1) > 9)
			{
				a = document.createElement("img");
				a.className = "line";
				a.src = "img/line.png"
				$(a).css({'left' : x * 80, 'top' : y * 60});
				$(".back:eq("+bac+")").append($(a));
			}

		}
	}
	$(".back:eq("+bac+")").css('top', -600);
	bac = (bac == 0) ? (1) : (0);
	$(".back:eq("+bac+")").css('top', 0);
}
/*
function animate_back()
{
		var v = 100;
		if (player[3] < 300)
			v -= 30;
		if (player[3] < 200)
			v -= 30;
		if (player[3] < 100)
			v -= 30;
		console.log(player[3]+"--"+v);
		$('.back').animate({top: '+=10'},v,function(){
		if (parseInt($(".back:eq("+bac+")").css('top')) >= 600)
    		generat_map();
		animate_back();
		});
}

function move_back()
{
	generat_map();
	generat_map();
//	animate_back();
}
*/