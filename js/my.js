$(function(){
	var num=0;

	$(document).mousewheel(function(e,d){
		num=num-d;
		if(num>5){
			num=5;
		}
		if(num<0){
			num=0;
		}
		$('.box').stop().animate({top:-num*100+'%'}, 500);

		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');

		$('.box>div').eq(num).addClass('on');
		$('.box>div').eq(num).siblings().removeClass('on');
	})

	$('ol li').click(function(event) {
		$(this).addClass('current');
		$(this).siblings().removeClass('current');

		num=$(this).index();
		$('.box').stop().animate({top:-num*100+'%'}, 500);
		$('.box>div').eq(num).addClass('on');
		$('.box>div').eq(num).siblings().removeClass('on');

	});

})
