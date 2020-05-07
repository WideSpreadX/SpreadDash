var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(42.3737591, -71.116534),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
/*     var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  } */
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Add some markers to the map.
// Note: The code uses the JavaScript Array.prototype.map() method to
// create an array of markers based on a given "locations" array.
// The map() method here has nothing to do with the Google Maps API.
var markers = locations.map(function(location, i) {
return new google.maps.Marker({
position: location,
label: labels[i % labels.length],
map:map
});
});

// Add a marker clusterer to manage the markers.
var markerCluster = new MarkerClusterer(map, markers,
{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

/* TEST PURPOSES ONLY */
var locations = [

{lat: 41.000000, lng: -72.00000}
]
