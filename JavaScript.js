$(document).ready(function(){
	$("ul.nav li a").on("click", function(){
		$("ul.nav li.active").removeClass("active");
		$(this).parent().addClass("active");
		
	});
	return false;
});










/*var imgContainer = document.querySelectorAll("#main >.container >.row div");
var navMenu = document.querySelectorAll("ul.nav li a");
var allBtn = document.getElementById("");
var publishedBtn = document.getElementById("publishedBtn");
var funnyBtn = document.getElementById("");
var graphicBtn = document.getElementById("");
var photoBtn = document.getElementById("");
var otherBtn = document.getElementById("");
var contactBtn = document.getElementById("");*/


/*publishedBtn.addEventListener("click", function(){
	for(var i = 0 ; i < imgContainer.lenght ; i++){
		
		if(imgContainer[i] === ){
			imgContainer[i].style.display = "block";
		}else{
			imgContainer[i].style.display = "none";
		}
		publishedBtn.classList.add = "active";
	}
});*/



/*navMenu.addEventListener("click", function(){
	navMenu.classList.remove("active");
	this.parentNode().classList.add("active");
});*/