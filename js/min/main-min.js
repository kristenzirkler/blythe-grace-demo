$(function(){function e(){var e=$(document).scrollTop(),t=1;e>t?$(".home-intro").addClass("fadetocolor"):$(".home-intro").removeClass("fadetocolor")}function t(){var e=$(document).scrollTop(),t=70;e>t?$(".site-tag").addClass("open").removeClass("blue-tag"):$(".page .site-tag").addClass("blue-tag")}function l(){if($(".start-grow").length){var e=$(document).scrollTop(),t=$(".start-grow").offset().top-100;e>t&&$(".start-grow").addClass("animate")}}function a(){i=new google.maps.Map(document.getElementById("map-canvas"),y)}function o(){i.set("zoom",15)}function s(e,t){var l=new google.maps.LatLng(e,t),a=new google.maps.Marker({position:l,map:i,icon:f})}$(".mobile-toggle").click(function(e){e.preventDefault(),$(".nav").toggleClass("nav-open")}),$(document).scroll(function(){t(),e(),l()});var i,n=new google.maps.LatLng(33.48067,-111.9453),r=[{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{stylers:[{hue:"#00aaff"},{saturation:-80},{gamma:1.75},{lightness:25}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:10}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}],p=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"administrative.country",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#00d2ff"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#d7e4f7"},{visibility:"on"}]}],y={zoom:13,disableDefaultUI:!0,scrollwheel:!1,draggable:!1,panControl:!1,center:n,styles:r},f={url:"img/marker-icon.png",size:new google.maps.Size(40,40),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(10,10),scaledSize:new google.maps.Size(20,20)};google.maps.event.addDomListener(window,"load",a),$(".map-slide").hover(function(){o(),$(this).addClass("map-open"),s(33.48067,-111.9453)}),$(".map-slide").click(function(){window.open("https://maps.google.com?daddr=6350+East+Thomas+Road+Suite+330+Scottsdale+Arizona+85251")})});