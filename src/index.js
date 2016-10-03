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
	var map = new mapboxgl.Map({
	    container: 'map-holder',
	    style: 'mapbox://styles/mapbox/dark-v9',
	    center: [-122.420679, 37.772537],
		zoom: 13,
		hash: true
	});
	$('#map-holder').show();
	map.resize();
	map.invalidateSize();

 };
 console.log('console.log anything after all ');

start();