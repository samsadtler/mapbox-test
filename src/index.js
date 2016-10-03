var fs = require('fs');
var envify = require('envify');
var http = require('http');
var env = require('../env.json');
var mapboxgl = require('mapbox-gl');
var $ = require('jquery-browserify')
var console = require("console-browserify");
console.log('loaded just before env file')

function start(){
 	console.log('start map');
 	mapboxgl.accessToken = env.MAPBOX_ACCESS_TOKEN;
 	var sw = new mapboxgl.LngLat(-73.9876, 40.7661);
	var ne = new mapboxgl.LngLat(-73.9397, 40.8002);
	var llb = new mapboxgl.LngLatBounds(sw, ne);
	
	var map = new mapboxgl.Map({
	    container: 'map-holder',
	    style: 'mapbox://styles/mapbox/dark-v9',
	    center: [-122.420679, 37.772537],
		zoom: 5,
		hash: true
	});

	map.addControl(new mapboxgl.Scale({
	    position: 'top-left',
	    maxWidth: 10000,
	    unit: 'imperial'
	}));
	$('#map-holder').show();
	map.resize();

 };
 console.log('console.log anything after all ');

start();