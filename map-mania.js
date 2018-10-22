var gMap;
var map;
function initApplication() {
    console.log('Hello-world-google Starting...');
}
var map;
function initMap() {
    var Lewisu= {lat: 41.6053085, lng:-88.0795047 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: Lewisu
    });
    var marker = new google.maps.Marker({
      position: Lewisu,
      map: map,
      title: 'Lewis University'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Change the zoom level',
        position: Lewisu
    });
    infowindow.open(map);
    map.addListener('zoom_changed', function() {
        infowindow.setContent('Zoom: ' + map.getZoom());
        console.log('Verify the zoom is working')
    //Add marker Function 

    var Chicago= {lat: 	41.881832, lng: -87.623177};;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: Chicago
    });
    var marker = new google.maps.Marker({
      position: Chicago,
      map: map,
      title: 'Chicago IL'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Change the zoom level',
        position: Chicago
    });
    infowindow.open(map);
    map.addListener('zoom_changed', function() {
        infowindow.setContent('Zoom: ' + map.getZoom());
        console.log('Verify the zoom is working')
    });
    //Add marker Function 
});  
}
function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Lewis University in the currently displayed map
    if (gMap.getBounds().contains({lat:41.6053085, lng: -88.0795047})) {
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
 

