// Main JS File Unminified 

$(function(){

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

	// Professionals Nav
	$('.professionals-nav a').click(function(event) {
	    event.preventDefault();
	    var selectedBio = $(this).data('name');

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
		$(this).parent().parent().removeClass('field-selected')
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


// Google Map -----------------------

var map,
	targetLocation = new google.maps.LatLng(33.48067, -111.94530),
	mapStyles = [
		{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},
		{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},
		{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
		//{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},
		{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
		{"stylers":[{"hue":"#00aaff"},{"saturation":-80},{"gamma":1.75},{"lightness":25}]},
		{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":10}]},
		{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
	,
	mapHoverStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00d2ff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d7e4f7"
            },
            {
                "visibility": "on"
            }
        ]
    }
],
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

var mapMarkerIcon = {
  url: 'img/marker-icon.png',
  size: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(10, 10),
  scaledSize: new google.maps.Size(20, 20)
};

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function newMapOptions() {
    map.set('zoom', 15);
    //map.set('styles', mapHoverStyles);
}
function addMarkerToMap(lat, long){
    var myLatLng = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
		icon: mapMarkerIcon
    });
	marker;
}
google.maps.event.addDomListener(window, 'load', initialize);

$('.map-slide').hover(function () {
  newMapOptions();
  $(this).addClass('map-open');
  addMarkerToMap(33.48067, -111.94530);
});
$('.map-slide').click(function () {
	window.open('https://maps.google.com?daddr=6350+East+Thomas+Road+Suite+330+Scottsdale+Arizona+85251');
});








});