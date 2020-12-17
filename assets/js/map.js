// [GSU MAP]
// Initialize and add the map and map3 inside div
let map;
let markerArray;
//direction map var start
let map3;
var directionsService;
var directionsRenderer;
let infoWindow;
let icons
//direction map var end
function initMap() {
  // The coordinates of GSU
  const coords = {
    lat: 33.754435,
    lng: -84.388888,
  };
  // create map and center it on GSU
  map = new google.maps.Map(document.getElementById('mapImage'), {
    zoom: 17,
    center: coords,
  });
  // create map and center it on Atlanta
  map3 = new google.maps.Map(document.getElementById('directionImage'), {
    center: {
      lat: 33.749,
      lng: -84.388,
    },
    zoom: 13,
  });
  // Start/Finish icons
icons = {
    start: new google.maps.MarkerImage('./assets/css/images/home.svg',
    new google.maps.Size( 44, 32 ),new google.maps.Point( 0, 0 ),new google.maps.Point( 22, 32 )),
    end: new google.maps.MarkerImage('./assets/css/images/swim.svg',
    new google.maps.Size( 44, 32 ),new google.maps.Point( 0, 0 ),new google.maps.Point( 22, 32 ))
}
  infoWindow = new google.maps.InfoWindow();
  //directionService is used to get directions. It
  //returns DirectionsResult and a DirectionsStatus.
  directionsService = new google.maps.DirectionsService();
  //DirectionsResult displays direction on map.
  directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});

  // directionsRenderer gives us renderer ability to render map.
  directionsRenderer.setMap(map3);
  directionsRenderer.setPanel(document.getElementById('right-panel'));
  const control = document.getElementById('floating-panel');
  map3.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  markerArray = [
    {
      // classroom south marker
      coords: {
        lat: 33.75282,
        lng: -84.387426,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Classroom South<h3>',
    },
    {
      // Andrew Young School of Policy marker
      coords: {
        lat: 33.754443,
        lng: -84.390108,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Andrew Young School of Policy<h3>',
    },
    {
      // Atlanta - 25 Park Place marker
      coords: {
        lat: 33.75528,
        lng: -84.38803,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - 25 Park Place<h3>',
    },
    {
      // Atlanta - Arts & Humanities marker
      coords: {
        lat: 33.754122,
        lng: -84.386187,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - Arts & Humanities<h3>',
    },
    {
      // Atlanta - Urban Life Building marker
      coords: {
        lat: 33.75172,
        lng: -84.38563,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - Urban Life Building<h3>',
    },
    {
      // Atlanta - Petit Science Center marker
      coords: {
        lat: 33.75113,
        lng: -84.38546,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - Petit Science Center<h3>',
    },
    {
      // Helen M. Aderhold Learning Center marker
      coords: {
        lat: 33.75634,
        lng: -84.38915,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Helen M. Aderhold Learning Center <h3>',
    },
    {
      // Atlanta - Natural Science Center marker
      coords: {
        lat: 33.753757,
        lng: -84.388256,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - Natural Science Center <h3>',
    },
    {
      // Atlanta - J. Mack Robinson College of Business marker
      coords: {
        lat: 33.755011,
        lng: -84.390246,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - J. Mack Robinson College of Business <h3>',
    },
    {
      // Atlanta - Langdale Hall marker
      coords: {
        lat: 33.753313,
        lng: -84.387173,
      },
      icon: './assets/css/images/class.svg',
      content: '<h3>Atlanta - Langdale Hall <h3>',
    },
    {
      // rec center marker
      coords: {
        lat: 33.752064,
        lng: -84.384231,
      },
      icon: './assets/css/images/swim.svg',
      content: '<h3>Student Recreation Center<h3>',
    },
    {
      // University Library marker
      coords: {
        lat: 33.752621,
        lng: -84.386608,
      },
      icon: './assets/css/images/library.svg',
      content: '<h3>University Library<h3>',
    }, //dining hall section
    {
      // Patton Dining Hall marker
      coords: {
        lat: 33.754641,
        lng: -84.382386,
      },
      icon: './assets/css/images/food.svg',
      content: '<h3>Patton Dining Hall<h3>',
    },
    {
      // Piedmont Dining Hall marker
      coords: {
        lat: 33.756964,
        lng: -84.38233,
      },
      icon: './assets/css/images/food.svg',
      content: '<h3>Piedmont Central Dining Hall<h3>',
    },
    {
      // Piedmont North Dining Hall marker
      coords: {
        lat: 33.759011,
        lng: -84.381276,
      },
      icon: './assets/css/images/food.svg',
      content: '<h3>Piedmont North Dining Hall<h3>',
    }, //Housing section
    {
      // University Lofts marker
      coords: {
        lat: 33.754257,
        lng: -84.38369,
      },
      icon: './assets/css/images/home.svg',
      content: '<h3>University Lofts<h3>',
    },
    {
      // Greek Housing marker
      coords: {
        lat: 33.754614,
        lng: -84.383041,
      },
      icon: './assets/css/images/home.svg',
      content: '<h3>Greek Housing<h3>',
    },
    {
      // University Commons marker
      coords: {
        lat: 33.757455,
        lng: -84.381982,
      },
      icon: './assets/css/images/home.svg',
      content: '<h3>University Commons<h3>',
    },
    {
      // Piedmont Central marker
      coords: {
        lat: 33.757031,
        lng: -84.382816,
      },
      icon: './assets/css/images/home.svg',
      content: '<h3>Piedmont Central<h3>',
    },
    {
      // Piedmont North marker
      coords: {
        lat: 33.75923,
        lng: -84.381575,
      },
      icon: './assets/css/images/home.svg',
      content: '<h3>Piedmont North<h3>',
    },
  ];
  markerArray.forEach((obj) => {
    addMarker(obj);
  });
  //static infoWindow1 obj for all markers.Allows us to close infowindow1 when another marker is clicked
  const infoWindow1 = new google.maps.InfoWindow();
  // Add markers
  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.icon,
      title: props.title,
    });
    google.maps.event.addDomListener(window, 'load', function () {
      google.maps.event.addListener(marker, 'click', function () {
        //add message to marker
        infoWindow1.setContent(props.content);
        infoWindow1.open(map, marker);
      });
    });
  }
}
// -----------
// DIRECTIONS
const directionButton = document.getElementById('directionButton');
directionButton.addEventListener('click', checkDirRequest);
let start,end;

function checkDirRequest() {
  infoWindow.close();
  start = document.getElementById('start').value;
  //if user request direction from their location, call userLocation();
  // else, skip geolocation and call direction();
  if (start === 'userLoc') {
    userLocation();
  } else {
    direction();
  }
}

function userLocation() {
  let userPos;
  //get user's current postion/coordinates
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userPos = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        direction(userPos);
      },
      () => {
        handleLocationError(true, infoWindow, map3.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map3.getCenter());
  }
}
function direction(userPos) {
    console.log('g');
  onChangeHandler();
  function onChangeHandler() {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    if (start === 'userLoc') {
      start = userPos;
    } else {
      start = markerArray[start];
      start = start.coords;
    }
    end = document.getElementById('end').value;
    end = markerArray[end];
    end = end.coords;

    const selectedMode = document.getElementById('travelMode').value;

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode[selectedMode],
      },
      (response, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
          let leg = response.routes[0].legs[0];
              makeMarker( leg.start_location, icons.start);
             makeMarker( leg.end_location, icons.end );
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      }
    );
    function makeMarker( position, icon) {
        new google.maps.Marker({
         position: position,
         map: map3,
         icon: icon,
        });
  }
}}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? 'OOPS! Unable to get your location. Please give us permission to locate you or start from a point on campus.'
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map3);
}