/*

Google Map Generator for Sunwing.ca
Programmed by: Michael Komocsin
Version 2.0.1
Last Updated: Jan 04, 2016

Added redundancy logic for missing settings
Added functionality to automatically get hotel coordinates from PITA - Oleg Andron

*/

var mapZoomDefault, mapLang, resortList;
var markers = [];
var iterator = 0;
var map;
var contentString = "";
var infowindow;
var resortHTML = "";
var showMap = true;
var hotels = [];

function getHotels() {
    $.ajax({
            dataType: 'json',
            method: 'GET',
            url: 'https://hotelinfoservice.sunwingtravelgroup.com/' + brand + '/' + lang + '/destination/' + destId + '/hotelCoordinates'
        })
        .done(function(json) {
            if (!json || json.constructor != Array)
                return;
            json.forEach(function(item) {
                hotels.push([new google.maps.LatLng(item.latitude, item.longitude), item.hotelName, item.url]);
            });
            if (hotels.length)
                resortList = hotels;
        })
        .always(drop);
}

// sanitize parameters
mapLang = (typeof lang !== 'undefined') ? lang : "en";
mapZoomDefault = (typeof mapZoom !== 'undefined') ? mapZoom : 3;
resortList = (typeof resortCoordList !== 'undefined') ? resortCoordList : [];
map = typeof map !== 'undefined' ? map : setMapLoc();

function setMapLoc() {

    if (resortList.length > 0) {
        return new google.maps.LatLng(resortList[0][0].k, resortList[0][0].B);
    }
}

function initializeMap() {

    // if (resortList.length < 1){
    // $("#map-canvas, .map-container").hide();
    // return;
    // }

    var mapOptions = {
        zoom: mapZoomDefault,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: map,
        minZoom: 3,
        scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    setTimeout(function() {
        getHotels();
    }, 1000);
}

function drop() {
    var total = 0;
    var resortTotal = resortList.length;
    var resortTotalCol1 = (resortTotal % 2 < 1) ? Math.round(Math.floor(resortTotal / 2)) : Math.round(Math.floor(resortTotal / 2)) + 1;

    resortHTML += '<table cellpadding="2" style="width: 50%; float: left;">';

    for (var i = 0; i < resortTotalCol1; i++) {
        setTimeout(function() {
            addMarker();
        }, i * 50);

        total = i + 1;
        resortHTML += '<tr><td class="number" width="24">' + total + '</td><td class="hotel">';
        resortHTML += '<a href="javascript: displayInfoWindow(' + i + ');" title="' + resortList[i][1] + '">' + resortList[i][1] + '</a>';
        resortHTML += '</td></tr>';

    }

    resortHTML += '</table>';

    resortHTML += '<table cellpadding="2" style="width: 50%; float: left;">';

    for (var i = resortTotalCol1; i < resortTotal; i++) {
        setTimeout(function() {
            addMarker();
        }, i * 50);

        total = i + 1;
        resortHTML += '<tr><td class="number" width="24">' + total + '</td><td class="hotel">';
        resortHTML += '<a href="javascript: displayInfoWindow(' + i + ');" title="' + resortList[i][1] + '">' + resortList[i][1] + '</a>';
        resortHTML += '</td></tr>';

    }

    resortHTML += '</table>';

    $("#maps").html(resortHTML);

}


function addMarker() {

    var map_icon = "http://www.sunwing.ca/images/maps/map-icon.png";

    markers.push(new google.maps.Marker({
        position: resortList[iterator][0],
        map: map,
        draggable: false,
        //animation: google.maps.Animation.DROP,
        title: resortList[iterator][1],
        icon: {
            url: map_icon,
            scale: 1
        }
    }));

    var miterator = iterator;

    google.maps.event.addListener(markers[iterator], 'click', function() {
        if (infowindow) {
            infowindow.close();
        }

        buildWindow(miterator);
        newWindow();
        infowindow.open(map, markers[miterator]);
    });

    iterator++;
}

function buildWindow(resort) {

    var ctaString = (mapLang == "en") ? 'View Hotel</a> ' : 'Voir l&rsquo;hotel</a> ';

    contentString = '<div id="gm-content">' +
        '<h3 class="heading">' + resortList[resort][1] + '</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="' + resortList[resort][2] + '" target="mapHotel">' +
        ctaString +
        '</p>' +
        '<div style="clear:both;">&nbsp;</div>' +
        '</div>' +
        '</div>';
}

function newWindow() {
    infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
    });
}

function displayInfoWindow(id) {
    google.maps.event.trigger(markers[id], 'click');
    scrollViewport(".map-container", 1000);

}

function hover(id) {
    google.maps.event.trigger(markers[id], 'click');
}

google.maps.event.addDomListener(window, 'load', initializeMap);




/*/////////////////////////////////////////
// Page scroll with user interuption
/////////////////////////////////////////*/

var $viewport = $('html, body');

function scrollViewport(_scrollTarget, _scrollTime) {

    _scrollTarget = (typeof _scrollTarget === "string") ? $(_scrollTarget).offset().top : _scrollTarget;

    $viewport.animate({
        scrollTop: _scrollTarget
    }, _scrollTime, "swing");

    // Stop the animation if the user interacts with the page
    $viewport.on("scroll mousedown DOMMouseScroll mousewheel keyup", function(e) {

        if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
            $viewport.stop().off('scroll mousedown DOMMouseScroll mousewheel');
        }
    });
}