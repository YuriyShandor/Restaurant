$(document).ready(function (){
  $('.toggler-icon').on('click', function() {
    $('.nav-bar').slideToggle('0.5s');
  });

  $('select').niceSelect();

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
});
