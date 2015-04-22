// Main JS File Unminified 

$(function(){

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});


	// Function to check hero placement
	function imageFade(){
	// change grayscale on scroll
		var y = $(document).scrollTop();
		//var t = $('.hero').offset().top - 100;
		var t = 1;

		if (y > t) {
		    $('.home-intro').addClass('fadetocolor');
		} else {
			$('.home-intro').removeClass('fadetocolor');
		}

	}
	// Function to check hero placement
	function navFade(){
	// change grayscale on scroll
		var y = $(document).scrollTop();
		//var t = $('.hero').offset().top - 100;
		var t = 70;

		if (y > t) {
		    $('.site-tag').addClass('open').removeClass('blue-tag');
		} else {
		    $('.page .site-tag').addClass('blue-tag');
		}
	}

	// Function to check hero placement
	function startGrowAni(){
	// change grayscale on scroll
		if ($('.start-grow').length) {
			var y = $(document).scrollTop();
			var t = $('.start-grow').offset().top - 100;

			if (y > t) {
			    $('.start-grow').addClass('animate');
			} else {
				//$('.start-grow').removeClass('animate');
			}

		}
	}

	// Hero update on scroll
	$(document).scroll(function () {
		navFade();
		imageFade();
		startGrowAni();
	});

});