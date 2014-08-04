function generat_map()
{
	$(".back:eq("+bac+")").empty();
	i = document.createElement("img");
	i.className = 'bloc';
	i.src = "back.png";
	$(i).css({'left' : 0, 'top' : 0});
	$(".back:eq("+bac+")").append($(i));
	for (var y = 0; y < 10; y++)
	{
		for (var x = 0; x < 10; x++)
		{
			
			if (Math.floor((Math.random() * 10) + 1) > 5)
			{
				a = document.createElement("img");
				a.className = "bloc";
				a.src = "lost.png"
				$(a).css({'left' : x * 40, 'top' : y * 40});
				$(".back:eq("+bac+")").append($(a));
			}

		}
	}
	$(".back:eq("+bac+")").css('top', -360);
	bac = (bac == 0) ? (1) : (0);
	$(".back:eq("+bac+")").css('top', 0);
}

function animate_back()
{
    $('.back').animate({top: '+=1'},10,'linear',function(){
	if (parseInt($(".back:eq("+bac+")").css('top')) >= 360)
    	generat_map();
	animate_back();
	});
}

function move_back()
{
	generat_map();
	generat_map();
	animate_back();
}