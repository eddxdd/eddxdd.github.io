var header = document.getElementById("header");
var navBar = document.getElementById("navbar");
var bg = document.getElementById("bg");

var navbarHeight = navBar.offsetHeight;
var headerHeight = header.offsetHeight;

header.style.height = screen.height-navbarHeight;

function initParallax(){
	if(window.pageYOffset > headerHeight){
		navBar.style.position = "fixed";
		navBar.style.top = "0";
    bg.style.display = "none";

	}else{
		navBar.style.position = "absolute";
		navBar.style.top = "0";
    bg.style.display = "flex";
	}
	bg.style.top = -(window.pageYOffset/10)+"px";
}

window.addEventListener("scroll", initParallax);

$(document).ready(function() {

  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
  });

});
