$(function(){function e(){var e=$(document).scrollTop(),t=70;e>t?$(".site-tag").addClass("open").removeClass("blue-tag"):$(".page .site-tag").addClass("blue-tag")}function t(){if($(".start-grow").length){var e=$(document).scrollTop(),t=$(".start-grow").offset().top-200;e>t&&$(".start-grow").addClass("animate")}}function s(e){if($("."+e).length){var t=$(document).scrollTop(),s=$("."+e).offset().top-330;t>s&&$("."+e).removeClass("gray-pic")}}function a(e,t,s){var a=r.getProjection().fromLatLngToPoint(e instanceof google.maps.LatLng?e:r.getCenter()),o=new google.maps.Point(("number"==typeof t?t:0)/Math.pow(2,r.getZoom())||0,("number"==typeof s?s:0)/Math.pow(2,r.getZoom())||0);r.setCenter(r.getProjection().fromPointToLatLng(new google.maps.Point(a.x-o.x,a.y+o.y)))}function o(){r=new google.maps.Map(document.getElementById("map-canvas"),m)}function l(){r.set("zoom",15),r.set("styles",d),a(p,150,0)}function n(e,t){var s={url:"img/marker-icon-2.png",size:new google.maps.Size(80,80),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(40,40),scaledSize:new google.maps.Size(40,40)},a=new google.maps.LatLng(e,t),o=new google.maps.Marker({position:a,map:r,icon:s})}$(".mobile-toggle").click(function(e){e.preventDefault(),$(".nav").toggleClass("nav-open")});var i=$(".map-slide .text span").html();if($(".map-slide").hover(function(){$(".map-slide .text span").html("Get Directions")},function(){$(".map-slide .text span").html(i)}),$(".professionals-nav a").click(function(e){e.preventDefault();var t=$(this).data("name");$("html,body").animate({scrollTop:$(".professionals-nav").offset().top-70},"slow"),$(".professionals").addClass("bio-open"),$(".professionals-nav a").removeClass("selected").addClass("unselected"),$(this).removeClass("unselected").addClass("selected"),$(".page-content div").removeClass("selected"),$(".bio-"+t).addClass("selected")}),$("input[type=text]").focus(function(){$(this).parent().parent().addClass("field-selected")}),$("input[type=text]").blur(function(){$(this).parent().parent().removeClass("field-selected")}),$("textarea").focus(function(){$(this).parent().parent().addClass("field-selected")}),$("textarea").blur(function(){$(this).parent().parent().removeClass("field-selected")}),$(".logo-list li").each(function(e){$(this).delay(100*e++).fadeTo(1e3,1)}),$(document).scroll(function(){e(),t(),s("about-bg"),s("give-back"),s("melt-mel"),s("cb-cross"),s("reggie"),s("wodstar"),s("taxanista")}),$("body").hasClass("home")||$("body").hasClass("contact")){var r,p=new google.maps.LatLng(33.48067,-111.9453),f=[{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{stylers:[{hue:"#00aaff"},{saturation:-80},{gamma:1.75},{lightness:25}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:10}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}],d=[{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}],m={zoom:13,disableDefaultUI:!0,scrollwheel:!1,draggable:!1,panControl:!1,center:p,styles:f};google.maps.event.addDomListener(window,"load",o),$(".map-slide").hover(function(){l(),$(this).addClass("map-open"),n(33.48067,-111.9453)}),$(".map-slide").click(function(){window.open("https://maps.google.com?daddr=6350+East+Thomas+Road+Suite+330+Scottsdale+Arizona+85251")})}});