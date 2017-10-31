$(document).ready(function() {

  $(".nav--mobile-menu").on("click", function () {

    $("header nav ul").toggleClass("open");

  });

  // Smooth scrolling
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
  });

});
