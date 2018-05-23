/* Overviewer.js
 *
 * Must be the first file included from index.html
 */


var overviewer = {};


/**
 * This holds the map, probably the most important var in this file
 */
overviewer.map = null;
overviewer.worldCtrl = null;
overviewer.layerCtrl = null;
overviewer.compass = null;
overviewer.coord_box = null;
overviewer.current_world = null;

/// Records the current layer by name (if any) of each world
overviewer.current_layer = {};
    

overviewer.collections = {
	/**
	 * MapTypes that aren't overlays will end up in here.
	 */
	'mapTypes':     {},
	/**
	 * The mapType names are in here.
	 */
	'mapTypeIds':   [],
	/**
	 * This is the current infoWindow object, we keep track of it so that
	 * there is only one open at a time.
	 */
	'infoWindow':   null,

	/**
	 * When switching regionsets, where should we zoom to?
	 * Defaults to spawn.  Stored as map of world names to [latlng, zoom]
	 */
	'centers': {},

	'overlays': {},

	'worldViews': [],

	'haveSigns': false,

	/**
	 * Hold the raw marker data for each tilest
	 */
	'markerInfo': {},

	/**
	 * holds a reference to the spawn marker.
	 */
	'spawnMarker': null,

	/**
	* if a user visits a specific URL, this marker will point to the
	* coordinates in the hash
	*/
	'locationMarker': null
};