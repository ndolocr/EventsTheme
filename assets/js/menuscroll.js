/* 
 *Javascript file to control slideshow in home page
 */

$(document).ready(function() {
	$(window).on("scroll", function(){
		if($(window).scrollTop()){
			$(navbar).addClass('black');
		}else{
			$(navbar).removeClass('black');
		}
	});
});


