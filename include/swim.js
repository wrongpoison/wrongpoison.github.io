$(document).ready(function(){
var fish = document.getElementById("orangeFish");

//init controller
var controller = new ScrollMagic.Controller({vertical: false});

TweenMax.fromTo(fish, 2, {y:"50"}, {y:"10", repeat:-1, yoyo:true, ease: Power0.easeNone});
TweenMax.fromTo(fish, 2, {width:"320"}, {width:"310", repeat:-1, yoyo:true});
TweenMax.fromTo(fish, 2, {height:"320"}, {height:"310", repeat:-1, yoyo:true});

//scroll mouse horizontally
$(function(){
	$("body").mousewheel(function(event, delta){
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});
});

var fishScene = new ScrollMagic.Scene({
	triggerElement: "#pinned-trigger1", //point of execution
	duration: $("#wrapper").width(), ///pin element for width
	revers: true //allow effect to trigger in reversed direction (backwards)
})
.setPin(fish)
.addTo(controller);

});