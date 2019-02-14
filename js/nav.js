$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 80){
			if(!flag){
                $("nav").css({"height": "62px"});
                //$(".nav-font-size").css({"font-size": "1rem"});
                $(".logo").css({"height":"53px","margin-top": "4px"});
                $("nav").css({"line-height": "62px"});
				flag = true;
			}
		}else{
			if(flag){
                $("nav").css({"height": "83px"});
                //$(".nav-font-size").css({"font-size": "20px"});
                $(".logo").css({"height":"53px","margin-top": "15px"});
                $("nav").css({"line-height": "83px"});
				flag = false;
			}
		}


	});

});