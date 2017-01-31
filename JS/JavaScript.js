$(document).ready(function(){
	$(".gallery-nav li a").on("click", function(){
		$(".gallery-nav li.active").removeClass("active");
		$(this).parent().addClass("active");
		
		var category = $(this).text().toLowerCase().replace(" ", "-");
		
		if(category === "all"){
			$("#main .container .row div").fadeIn("slow").removeClass("hidden");
		}else{
			$("#main .container .row div").each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass("hidden");
				}else{
					$(this).fadeIn("slow").removeClass("hidden");
				}
			});
		}
		return false;
	});
	
	$(".navbar-toggle").on("click", function(){
		$(this).toggleClass("open");
	});
	
});
