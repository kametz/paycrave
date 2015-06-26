function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
 
  var mapOptions = {
    center: new google.maps.LatLng(39.752156, -104.987029),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  // Add custom icon
  var nomKabob = new google.maps.LatLng(39.755, -104.9875);
  var agaveAzul = new google.maps.LatLng(39.750, -104.999);
  var espinico = new google.maps.LatLng(39.749, -104.996);
  var portalPizza = new google.maps.LatLng(39.752, -104.996);
  var bananaPlanet = new google.maps.LatLng(39.752, -105.005);
  var portopotomus = new google.maps.LatLng(39.749, -105.005);

  var marker1 = new google.maps.Marker({
    position: nomKabob,
    title:"Nom Kabob",
    icon: 'images/truckSel.svg'
  });

  var marker2 = new google.maps.Marker({
    position: portalPizza,
    title:"Portal Pizza",
    icon: 'http://paycrave.nfshost.com/images/truck.svg'
  });

  var marker3 = new google.maps.Marker({
    position: espinico,
    title:"Espinico\'s",
    icon: 'http://paycrave.nfshost.com/images/truck.svg'
  });

  var marker4 = new google.maps.Marker({
    position: agaveAzul,
    title:"Agave Azul",
    icon: 'http://paycrave.nfshost.com/images/truck.svg'
  });

  var marker5 = new google.maps.Marker({
    position: bananaPlanet,
    title:"Banana Planet",
    icon: 'http://paycrave.nfshost.com/images/truck.svg'
  });

  var marker6 = new google.maps.Marker({
    position: portopotomus,
    title:"Portopotomus",
    icon: 'http://paycrave.nfshost.com/images/truck.svg'
  });

  // To add the marker to the map, call setMap();
  marker1.setMap(map);
  marker2.setMap(map);
  marker3.setMap(map);
  marker4.setMap(map);
  marker5.setMap(map);
  marker6.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);