$(function(){
// Main JS File Unminified

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

    // Map Text
    var oldText = $('.map-slide .text span').html();
    $('.map-slide').hover(
      function() {
        $('.map-slide .text span').html('Get Directions');
      }, function() {
        $('.map-slide .text span').html(oldText);
      }
    );

	// Professionals Nav
	$('.professionals-nav a').click(function(event) {
	    event.preventDefault();
	    var selectedBio = $(this).data('name');
        $('html,body').animate({scrollTop: $('.professionals-nav').offset().top-70},'slow');

		$('.professionals').addClass('bio-open');

		$('.professionals-nav a').removeClass('selected').addClass('unselected');
		$(this).removeClass('unselected').addClass('selected');

		$('.page-content div').removeClass('selected');
		$('.bio-'+selectedBio).addClass('selected');
	});

	$('input[type=text]').focus(function() {
		$(this).parent().parent().addClass('field-selected');
	});
	$('input[type=text]').blur(function() {
		$(this).parent().parent().removeClass('field-selected');
	});

    $('textarea').focus(function() {
        $(this).parent().parent().addClass('field-selected');
    });
    $('textarea').blur(function() {
        $(this).parent().parent().removeClass('field-selected');
    });

	// Home Page Fade in 
    /*
	function imageFade(){
		var y = $(document).scrollTop();
		//var t = $('.hero').offset().top - 100;
		var t = 1;

		if (y > t) {
		    $('.home-intro').addClass('fadetocolor');
		} else {
			//$('.home-intro').removeClass('fadetocolor');
		}

	}
    */
	// Navigation Animation
	function navFade(){
		var y = $(document).scrollTop();
		//var t = $('.hero').offset().top - 100;
		var t = 70;

		if (y > t) {
		    $('.site-tag').addClass('open').removeClass('blue-tag');
		} else {
		    $('.page .site-tag').addClass('blue-tag');
		}
	}

	// Animate Icons on Home Page
	function startGrowAni(){
		if ($('.start-grow').length) {
			var y = $(document).scrollTop();
			var t = $('.start-grow').offset().top - 200;

			if (y > t) {
			    $('.start-grow').addClass('animate');
			} else {
				//$('.start-grow').removeClass('animate');
			}

		}
	}

    // Animate Logos on Giving Back
    $('.logo-list li').each(function(i) {
        if ($(this).hasClass('hidden-xs')) {
        } else {
            $(this).delay((i++) * 100).fadeTo(1000, 1);
        }
    });

    // Grayscale on scroll
    function aboutGray(className){
        if ($('.'+className).length) {
            var y = $(document).scrollTop();
            var t = $('.'+className).offset().top - 330;

            if (y > t) {
                $('.'+className).removeClass('gray-pic');
            } else {
                //$('.start-grow').removeClass('animate');
            }

        }
    }

	// Scroll Funcitons
	$(document).scroll(function () {
		navFade();
		//imageFade();
		startGrowAni();
        aboutGray('about-bg');
        aboutGray('give-back');
        aboutGray('melt-mel');
        aboutGray('cb-cross');
        aboutGray('reggie');
        aboutGray('wodstar');
        aboutGray('taxanista');
	});

// Google Map ---------------------------------------------------------------
if ($('body').hasClass('home') || $('body').hasClass('contact')) {
    function map_recenter(latlng,offsetx,offsety) {
        var point1 = map.getProjection().fromLatLngToPoint(
            (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
        );
        var point2 = new google.maps.Point(
            ( (typeof(offsetx) === 'number' ? offsetx : 0) / Math.pow(2, map.getZoom()) ) || 0,
            ( (typeof(offsety) === 'number' ? offsety : 0) / Math.pow(2, map.getZoom()) ) || 0
        );  
        map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
            point1.x - point2.x,
            point1.y + point2.y
        )));
    }

    var map,
    	targetLocation = new google.maps.LatLng(33.485222, -111.90989),
    	mapStyles = [
    		{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},
    		{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},
    		{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
    		//{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},
    		{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
    		{"stylers":[{"hue":"#00aaff"},{"saturation":-80},{"gamma":1.75},{"lightness":25}]},
    		{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":10}]},
    		{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}],
        mapHoverStyles = [
            {"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
            //{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            //{"stylers":[{"hue":"#00aaff"},{"saturation":-80},{"gamma":1.75},{"lightness":25}]},
            //{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":10}]},
            {"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}],
    	mapOptions = {
    		// How zoomed in you want the map to start at (always required)
    		zoom: 13,
    		disableDefaultUI: true,
    		scrollwheel: false,
    		draggable: false,
    		panControl: false,

    		// The latitude and longitude to center the map (always required)
    		center: targetLocation, // BlytheGraceOffice

    		// How you would like to style the map. 
    		// This is where you would paste any style found on Snazzy Maps.
    		styles: mapStyles
    	};



    function initialize() {
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

    function newMapOptions() {
        map.set('zoom', 15);
        map.set('styles', mapHoverStyles);
        map_recenter(targetLocation,150,0);
    }
    function addMarkerToMap(lat, long){
        var mapMarkerIcon = {
          url: 'http://blythegrace.com/img/marker-icon-2.png',
          size: new google.maps.Size(80, 80),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(40, 40),
          scaledSize: new google.maps.Size(40, 40)
        };
        var myLatLng = new google.maps.LatLng(lat, long);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
    		icon: mapMarkerIcon
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $('.map-slide').hover(function () {
      newMapOptions();
      $(this).addClass('map-open');
      addMarkerToMap(33.485222, -111.90989);
    });
    $('.map-slide').click(function () {
    	window.open('https://maps.google.com?daddr=3260+N+Hayden+Rd,+Scottsdale,+AZ+85251');
    });
}







});