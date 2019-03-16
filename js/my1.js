$(function(){
	var num=0;

	$('.gps li').click(function(event) {
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	});
})