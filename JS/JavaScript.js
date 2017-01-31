$(document).ready(function(){
	$("ul.nav li a").on("click", function(){
		$("ul.nav li.active").removeClass("active");
		$(this).parent().addClass("active");
		
		var category = $(this).text().toLowerCase().replace(" ", "-");
		
		if(category === "all"){
			$("#main .container .row div").fadeIn("slow").removeClass("hidden");
			$("#about").addClass("hidden");
			$("#main").removeClass("hidden");
		}
		else if(category === "about"){
			$("#about").removeClass("hidden");
			$("#main").addClass("hidden");
			$("#about .container .row .content-wrapper h2").addClass("animated fadeInDown");
		}
		else{
			$("#main .container .row div").each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass("hidden");
					$("#main").removeClass("hidden");
					$("#about").addClass("hidden");
				}else{
					$(this).fadeIn("slow").removeClass("hidden");
					$("#about").addClass("hidden");
				}
			});
		}
		return false;
	});
	
	$(".navbar-toggle").on("click", function(){
		$(this).toggleClass("open");
	});
	
	
});