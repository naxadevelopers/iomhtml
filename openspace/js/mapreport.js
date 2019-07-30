
$(document).ready(function () {
    // var map = L.map('map').setView([27.7, 85.4], 7);
    var map = L.map('map', {
        // layers: [base],
        center: new L.LatLng(27.7, 85.4),
        zoom: 7,
    });

    osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    // var markerIcon = [
    // 	["Kritipur",27.67988,85.27544],
    // 	["Pokhara",28.26689,83.96851],
    // 	["Waling",27.98333,83.76667],
    // 	["Banepa",27.62979,85.52138],
    // 	["Butwal",27.70055,83.44836],
    // 	];

    // 	for (var i = 0; i < markerIcon.length; i++) {
    // 		marker = new L.marker([markerIcon[i][1],markerIcon[i][2]])
    // 			.bindPopup(markerIcon[i][0])
    // 			.addTo(map);
    // 	}

    var baseLayers = {
        "OpenStreetMap": osm,
        "Google Streets": googleStreets,
        "Google Hybrid": googleHybrid,
        "Google Satellite": googleSat,
        "Google Terrain": googleTerrain,

    };

    // var latLong = [{
    // 	"lat": 27.67988,
    // 	"lng": 85.27544
    //   }, {
    // 	"lat": 28.26689,
    // 	"lng": 83.96851
    //   }, {
    // 	"lat": 27.98333,
    // 	"lng": 83.76667
    //   }, {
    // 	"lat": 27.62979,
    // 	"lng": 85.52138
    //   }, {
    // 	"lat": 27.70055,
    // 	"lng": 83.44836
    //   }];
    customPopup = '<div class="bind-popup"> <div class="bind-header"><h5>Airport Golf Club Site (ARMY)</h5> <p><i class="fa fa-map-marker"></i>Chabel Kathmandu</p><em><span>source:</span>Iom Nepal</em></div><a href="report.html" class="openSpace_btn">View Details</a></div><ul><li></li><li></li></ul>'
    var customOptions =
    {
        'maxWidth': '400',
        'width': '200',
        'className': 'popupCustom'
    }
    var Kritipur = L.circle([27.67988, 85.27544], {
        color: '#043882',
        fillColor: '#043882',
        fillOpacity: 0.7,
        radius: 5000
    }).addTo(map);

    Kritipur.bindPopup(customPopup, customOptions);

    var pokhara = L.circle([28.26689, 83.96851], {
        color: '#f7c905',
        fillColor: '#f7c905',
        fillOpacity: 0.7,
        radius: 5000
    }).addTo(map);

    pokhara.bindPopup(customPopup, customOptions);

    var butwal = L.circle([27.70055, 83.44836], {
        color: '#d90404',
        fillColor: '#d90404',
        fillOpacity: 0.7,
        radius: 5000
    }).addTo(map);

    butwal.bindPopup(customPopup, customOptions);

    var waling = L.circle([27.98333, 83.76667], {
        color: '#f4b4c3',
        fillColor: '#f4b4c3',
        fillOpacity: 0.7,
        radius: 5000
    }).addTo(map);

    waling.bindPopup(customPopup, customOptions);

    var banepa = L.circle([27.62979, 85.52138], {
        color: '#05954e',
        fillColor: '#05954e',
        fillOpacity: 0.7,
        radius: 5000
    }).addTo(map);

    banepa.bindPopup(customPopup, customOptions);
    // latLong.forEach(function(feature) {
    // 	var circle = L.circle(feature, {
    // 	  color: 'red',
    // 	  fillColor: '#f03',
    // 	  fillOpacity: 0.5,
    // 	  radius: 5000
    // 	}).addTo(map);
    //   });

    //   myMap.panTo([2, 22]);

    layerswitcher = L.control.layers(baseLayers, {}, { collapsed: true }).addTo(map);
});

$('.leaflet-popup-content, .leaflet-popup-content-wrapper').css('width', '300px');
