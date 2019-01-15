$(document).ready(function(){
	$(".hamburger").on("click", function(){
		$(this).toggleClass("is-active");
		
		if($(".hamburger").hasClass("is-active")) {
			$(".cl-effect-5").css("display", "flex");
		} else {
			$(".cl-effect-5").css("display", "none");
		}
	});
});

/*

$(window).resize(function(){

       if ($(window).width() <= 992) {  

   

       }     

});

*/