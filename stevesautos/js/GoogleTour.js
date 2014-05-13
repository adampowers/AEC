var tourLocation = "googleTour";

function initialize() {
    var bryantPark = new google.maps.LatLng(32.808826, -117.119466);
    var panoramaOptions = {
        position: bryantPark,
        pov: {
            heading: 20,
            pitch: 0
        },
        zoom: 1
    };
    var myPano = new google.maps.StreetViewPanorama(
        document.getElementById(tourLocation),
        panoramaOptions);
    myPano.setVisible(true);
}

google.maps.event.addDomListener(window, 'load', initialize);

