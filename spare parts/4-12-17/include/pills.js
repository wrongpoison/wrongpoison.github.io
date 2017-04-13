$(document).ready(function(){
	var bottle = $("#pillbottle");
	var bottlecap = $(".cap");

	TweenMax.to(bottle, 2, {rotation:"-140"});
	TweenMax.to(bottlecap, 2, { y:"-500"});

});