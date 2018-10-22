// Notes relating to differences from other tutorials:
// 1 - Renamed "Map, Map, Map" to "myMapID, gMap, map"
// 2 - Modified "bounds-changed" to "idle"

var gMap;
var favoritePlaces = [
    {content:'<strong>#: Sillicon Valley...Tech Capital of the world <strong>', coordinates:{lat:37.3875,lng:122.0575}, iconImagePath:"two.png"},
    {content:'Honolulu', coordinates:{lat:21.315603,lng:-157.858093}, iconImagePath:"flag.png"},,
    {content:'Venice, Italy', coordinates:{lat:45.444958,lng:12.328463}, iconImagePath:"flag.png"},
    {content:'Chicago IL', coordinates:{lat:41.881832,lng: -87.623177}, iconImagePath:"flag.png"},
    {content:'The Great Wall of China', coordinates:{lat:40.4319,lng:116.5704}, iconImagePath:"flag.png"},
    {content:'Stonehenge England', coordinates:{lat:51.1789,lng: 1.8262}, iconImagePath:"flag.png"},
    {content:'Pyramids of Egypt', coordinates:{lat:29.976480,lng:31.131302}, iconImagePath:"flag.png"},
    {content:'Grand Canyon ', coordinates:{lat:36.056595,lng:-112.125092}, iconImagePath:"flag.png"},
    {content:'Nassau Bahamus ', coordinates:{lat:25.05823,lng:-77.34306}, iconImagePath:"flag.png"}
]; 
var currentPlaceIndex = 9;
var currentPlace = favoritePlaces[currentPlaceIndex];
function initApplication() {
    console.log('Map Mania Lite - Starting!');
}
// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file. 
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    // Add Marker for Nassau Bahamus   
    var bahamus = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Nassau Bahamus</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Nassau Bahamus</b>, Is the capital and commercial center of the Bahamas </b>' +
    'Located on New Providence Island Nassau has an attractive harbor '+
    'Just over 70 percent of the country lives inNassau  '+
    'Also became a notable tourist attraction'
    '</div>'+
    '</div>';  
    var infowindow = new google.maps.InfoWindow({
        content: bahamus
      })
      var marker = new google.maps.Marker({position:{lat:25.05823,
        lng:-77.3406}, 
        map:gMap
    });
   
    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
      var canyon = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Grand Canyon </h1>'+
      '<div id="bodyContent">'+
      '<p><b>Grand canyon, Arizona </b>, </b>,is a steep sided canyon careved by the colorado river in Ariona ' +
      ' Nearly two million years of Earths geological history have been engraved '+
      ' Natiive American people were among the first to live in the grand canyon area.'+
      'Aside from casual sight seeing, rafting, hiking, running and helicopter tours are among the various activities that can be performd in the area.'+
      '</div>'+
      '</div>';
      
    // Adding Marker for Grand canyon
    var infowindow2 = new google.maps.InfoWindow({
        content: canyon
    })
    var marker3 = new google.maps.Marker({position:{lat:36.056595,
        lng:-112.125092}, 
        map:gMap
    });
    marker3.addListener('click', function() {
        infowindow2.open(map, marker3);
      });
      var egypt = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Pyramids of Egypt</h1>'+
      '<div id="bodyContent">'+
      '<p><b> The pyramids of Egypt, </b>, are acient Pyramid-shaped masonry strucutreds located in Egpyt' +
      '</div>'+
      '</div>';
    // Adding Pyramids of Egypt
    var infowindow3 = new google.maps.InfoWindow({
        content: egypt
    })
    var marker4 = new google.maps.Marker({position:{lat:29.976480,
        lng:31.131302}, 
        map:gMap
    });
    marker4.addListener('click', function() {
        infowindow3.open(map, marker4);
      });
      var stone = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Honolulu Hawaii</h1>'+
      '<div id="bodyContent">'+
      '<p><b>StoneHenge England </b>, Is a prehistoric monument in WiltShire England two miles west of Amesbury ' +
      'The city is the main gateway to Hawaii and major portal to the united states'+
      '</div>'+
      '</div>';
    // Adding Marker for StoneHenge England 
    var infowindow4 = new google.maps.InfoWindow({
        content: stone
    })
    var marker5= new google.maps.Marker({position:{lat:51.1789,
        lng: 1.8262}, 
        map:gMap
    });
    marker5.addListener('click', function() {
        infowindow4.open(map, marker5);
      });
      var china = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Great Wall of China </h1>'+
      '<div id="bodyContent">'+
      '<p><b>The Great Wall of China </b>, is a series of fortifications made of stone, brick tamped earth, wood, and other materials' +
      'generally built along the east-west line accross the historical northern borders of china to protect the chinese'+
      'state and empires against the raids and invasions of various noomadic groups of the Eurasion Steppe. '+
      '</div>'+
      '</div>';
    // Adding Marker for the great wall of china 
    var infowindow5 = new google.maps.InfoWindow({
        content: china 
    })
    var marker6 = new google.maps.Marker({position:{lat:40.4319,
        lng:116.5704} ,
         map:gMap
    });
    marker6.addListener('click', function() {
        infowindow5.open(map, marker6);
      });

      var Chicago  = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Chicago IL </h1>'+
      '<div id="bodyContent">'+
      '<p><b>i</b>,Chicago is the 3rd most populous city in the U.S </b>' +
      'It is home to various sports team such as the Chicago Bulls, Bears, White Sox and BlackHawks'+
      'Chicago is known for its architecture and many museums for tourist '+
      'The name <b>Chicago</b> was derived from the indian word Chicagoua for the native garlic plant'+
      'After the "Great Chicago Fire" in 1885 the city experienced its largest arhitecturial boom. '+
      'Introducing the first steel framed high rise building and ushered in the skyscraper area'+
      'Annually the Chicago economy gross 670.5 Billion, making it one of the best econonmies in the US.'
      '</div>'+
      '</div>';
 
    // Adding marker for Chicago IL 
    var infowindow6 = new google.maps.InfoWindow({
        content: Chicago 
    })
    var marker7 = new google.maps.Marker({position:{lat:41.881832,
        lng: -87.623177} , 
        map:gMap
    });
    marker7.addListener('click', function() {
        infowindow6.open(map, marker7);
     });
     var Italy = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Venice Italy</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Venice Italy</b>, is a city in northeastern italy and the capital of the Veneto region'+
     '</div>';
    //venice Italy
    var infowindow7= new google.maps.InfoWindow({
        content: Italy
    })

    var marker8 = new google.maps.Marker({position:{lat:45.444958,
        lng:12.328463} , 
        map:gMap
    });
    marker8.addListener('click', function() {
        infowindow7.open(map, marker8);
     });
    
     var Honolulu = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Honolulu Hawaii</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Honolulu , Hawaii</b>, Is the capital and largest city of the U.S of Hawaii </b>,The city is ' +
     'The city is the main gateway to Hawaii and major portal to the united states'+
     'IT is also a major hub for international bissiness, and military defense'+
     'The word <b>Honolulu</b> means sheltered harber or calm port'+
     'Honolulu gained historical recognition following the attack on pearl harber by japan near the city on December 7, 1941'+
     'Today, Honolulu ranls high on the "world livability" rankings being marked as the 2nd safest city in the world '+
     '$10 billion is contributed annually due to large tourism industry'+
     '</div>'+
     '</div>';


    //Honolulu 
    var infowindow8= new google.maps.InfoWindow({
        content: Honolulu
    })
    var marker9  = new google.maps.Marker({position:{lat:21.3069,
        lng:157.8583} , 
        map:gMap
    });
    marker9.addListener('click', function() {
        infowindow8.open(map, marker9)
     });

     var Sillicon = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Sillicon Valley California</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Sillicon Valley</b>, also referred to as <b>The Tech Capital of the world</b>, is Located ' +
     'In the southern San Francisco Bay Area of Northern California '+
     'It is also the 3rd largest city in california'+
     'The word <b> Sillicon</b> orginally referred to the large number f Sillicon Chips'+
     '(280&#160;mi) Sillicon Valley was born through STEM research'+
     'Many Tech corporation head quarters lies there including FaceBook, Google,'+
     'and many other startup tech companies.'+
     '</div>'+
     '</div>';
    

    //sillicon valley
    var infowindow9= new google.maps.InfoWindow({
        content:Sillicon
    })
    var marker10 = new google.maps.Marker({position:{lat:37.3875,
        lng:-122.0575} , 
        map:gMap
    });
    marker10.addListener('click', function() {
        infowindow9.open(map, marker10)
     });
    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Santorini, Greece'});
    marker2.addListener('click', function() 
    {
        infoWindow.open(gMap, marker2);
    });
    // Note that several message boards suggested using 'idle' instead of 'bounds_changed' because 
    // 'bounds_changed' gets called over and over when the user drags the map.
    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

}
    function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Nassau Bahamus, WI is in the currently displayed map 
    if (gMap.getBounds().contains({lat:25.05823,lng:-77.34306})) {
        inBounds = true;
    }
    //Check if Grand Canyon is currently displayed on the map 
    if (gMap.getBounds().contains({lat:36.056595,lng:-112.125092})) {
        inBounds = true;
    }
    // Check if Pyramids of Egypt is currently displayed on the map
    if (gMap.getBounds().contains({lat:29.976480,lng:31.131302})) {
        inBounds = true;
    }

    // check if stonehenge is currently displayed on the map
    if (gMap.getBounds().contains({lat:51.1789,lng: 1.8262})) {
        inBounds = true;
    }
    // The great Wall of china 
    if (gMap.getBounds().contains({lat:40.4319,lng:116.5704})) {
        inBounds = true;
    }
    //Chicago IL
    if (gMap.getBounds().contains({lat:41.881832,lng: -87.623177})) {
        inBounds = true;
    }
    //venice italy 
    if (gMap.getBounds().contains({lat:45.444958,lng:12.328463})) {
        inBounds = true;
    
    }
    //Honolulu 
    if (gMap.getBounds().contains({lat:21.3069,lng:157.8583})) {
        inBounds = true;
    }
// Sillicon Valley 
    if (gMap.getBounds().contains({lat:37.3875,lng:-122.0575})) {
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}
function openHelp() {
    var help = document.getElementById('helpID');
    help.style.display = "block";
}

function closeHelp() {
    var help = document.getElementById('helpID');
    help.style.display = "none";
}
