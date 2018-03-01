$(document).ready(function (){
  $('.toggler-icon').on('click', function() {
    $('.nav-bar').slideToggle('0.5s');
  });

  $('select').niceSelect();

  //Scroll to section
  $('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();

	  var target = this.hash;
	  var $target = $(target);

	  $('html, body').stop().animate({
	     'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	      window.location.hash = target;
	  });
	});

  // Animate effects on scroll
  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
    once: true,
  });
});
