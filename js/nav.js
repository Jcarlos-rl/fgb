$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("nav").css({"margin-top": "0px", "position":"fixed"});
				$(".logo").css({"display":"block"});
				flag = true;
			}
		}else{
			if(flag){
				$("nav").css({"margin-top": "200px", "position":"absolute"});
				$(".logo").css({"display":"none"});
				flag = false;
			}
		}


	});

});