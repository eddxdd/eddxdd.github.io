// Variables
let header = document.getElementById("header");
let navBar = document.getElementById("navbar");
let bg = document.getElementById("bg");

let navbarHeight = navBar.offsetHeight;
let headerHeight = header.offsetHeight;

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

// On scroll
window.addEventListener("scroll", initParallax);

$(document).ready(function() {

  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
  });

});
