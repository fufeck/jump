var b1 = 0;
var b2 = 0;
var bac = -1;

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
			
			if (Math.floor((Math.random() * 10) + 1) > 8)
			{
				a = document.createElement("img");
				a.className = "bloc";
				a.src = "lost.png"
				$(a).css({'left' : x * 40, 'top' : y * 40});
				$(".back:eq("+bac+")").append($(a));
			}

		}
	}
	bac = (bac == 0) ? (1) : (0);
}

function animate_back()
{
/*
  $('.back').animate({top: '-=360'},1000,function(){
  	$('.back').css('top', 0);
  	animate_back();
  });*/
	$('.back').css('top', 0);
	$('.back:eq('+0+')').css('top', "-=360");
    $(".back").animate({top: '+=360'}, { duration: 2000, queue: false });
//    animate_back();
}

function move_back()
{
//	bac = 0;
//		generat_map();
//	$(".back:eq("+move+")").css({'left' : 0, 'top' : 0});
	if (bac == -1)
	{
		bac = 0;
		generat_map();
		generat_map();
	}
	animate_back();
/*	if (height % 360 == 0)
		generat_map();
	animate_back();
	move_back();*/
}