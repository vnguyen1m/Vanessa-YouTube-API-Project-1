
// Map of Barcelona, Madrid, Arzak
function myMap() {
  var barcelona = new google.maps.LatLng(41.4036339,2.1721671);
  var madrid = new google.maps.LatLng(40.4316233,-3.7214167);
  var arzak = new google.maps.LatLng(43.3214541,-1.9515508);

  var mapCanvas = document.getElementById("madrid");
  var mapOptions = {center:   madrid, zoom: 4};
  var map = new google.maps.Map(mapCanvas,mapOptions);

  var flightPath = new google.maps.Polygon({
    path: [madrid, barcelona, arzak],
    strokeColor: "pink",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "light pink",
    fillOpacity: 0.4
  });
  flightPath.setMap(map);


  var marker = new google.maps.Marker({
    position: ("madrid", "barcelona", "arzak"),
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
  content: "La Sagrada Familia"
  });
  infowindow.open(map,marker);
  }

