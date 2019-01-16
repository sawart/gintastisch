$(document).ready(function(){
	$(".hamburger").on("click", function(){
		$(this).toggleClass("is-active");
		
		if($(".hamburger").hasClass("is-active")) {
			$("nav .cl-effect-5").css("display", "flex");
		} else {
			$("nav .cl-effect-5").css("display", "none");
		}
	});
});

/*
$(document).ready(function(){
	$(".ingredients .item h3").on("click", function(){
		$(".ingredients .item p").css("display", "none");
			$(".ingredients .item p").css("display", "block");
	});
});
*/

$(document).ready(function(){
	$(".ingredients .item h3").click(function(){ // trigger
		$(this).next("p").slideToggle("fast"); // blendet beim Klick auf "dt" die nächste "dd" ein.
	});
});

/*

$(window).resize(function(){

       if ($(window).width() <= 992) {  

   

       }     

});

*/