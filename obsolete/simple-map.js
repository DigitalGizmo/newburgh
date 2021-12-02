// ---------- MAP ----------

// Define base layer.
const stamen = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain'
	// + 'background/{z}/{x}/{y}.{ext}', {
	+ '/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, '
	+ '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; '
	+ 'Map data &copy; ' 
	+ '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	ext: 'png'
});

// ----- define historic overlay ----- 
const sanborn   = L.tileLayer('tiles/sanborn/{z}/{x}/{y}.png', {
	attribution: 'Sanborn map',
	// bounds: mybounds, //tempbounds
	minZoom: 15,
	maxZoom: 18,
	//opacity: .7,
    tms: true
})

function polystyle2(feature) {
	let fColor = 'placeholder'
	// console.log(" -- polystyle name: " + feature.properties.name);
	switch (feature.properties.name) {
		case 'state':
			fColor = 'blue';
			// console.log(" -- in case: " + fColor); 
			break;
		case 'boarding':   
			fColor = 'green';
			break;
		case 'hudson':   
			fColor = 'red';
			break;
		case 'cathedral':
			fColor = 'brown';
			break;
		case 'market':
			fColor = 'yellow';
			break;
		case 'pearl':
			fColor = 'orange';
			break;
		case 'gut':
			fColor = 'purple';
			break;
	}
    return {
        fillColor: fColor,
        weight: 2,
        opacity: 1,
        color: fColor,  //Outline color
        fillOpacity: 0.2
    };
}


// See https://leafletjs.com/examples/geojson/ for a better way to orgainize this.
const district_state = {
	"type": "FeatureCollection",
	"name": "district-state",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 1, "name": "state" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.75989884186076, 42.653339402122143 ], [ -73.756649332285008, 42.651490128484717 ], [ -73.75739290810391, 42.650785835002196 ], [ -73.760639169552576, 42.652645445105343 ], [ -73.75989884186076, 42.653339402122143 ] ] ] ] } }
	]
}
const districtState = new L.GeoJSON(district_state, {style: polystyle2});

const district_boarding = {
	"type": "FeatureCollection",
	"name": "district-boarding",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 2, "name": "boarding" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.76072145296024, 42.652553080127312 ], [ -73.75653817493945, 42.650180965685465 ], [ -73.757646647226053, 42.649121826627415 ], [ -73.761762453020722, 42.651539320385709 ], [ -73.76072145296024, 42.652553080127312 ] ] ] ] } },
	{ "type": "Feature", "properties": { "id": 2, "name": "boarding" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.762263675272052, 42.651064336360569 ], [ -73.758106260264128, 42.648689179463155 ], [ -73.75884186951771, 42.647980396627027 ], [ -73.762976953091268, 42.65039084533084 ], [ -73.762263675272052, 42.651064336360569 ] ] ] ] } }
	]
}
const districtBoarding = new L.GeoJSON(district_boarding, {style: polystyle2});

const district_hudson = {
	"type": "FeatureCollection",
	"name": "district-hudson",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 4, "name": "hudson" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.761785377720372, 42.651512437818681 ], [ -73.762233118986444, 42.651082903595253 ], [ -73.758080156518545, 42.648701321138539 ], [ -73.757671349275626, 42.649111780730941 ], [ -73.761785377720372, 42.651512437818681 ] ] ] ] } }
	]
}
const districtHudson = new L.GeoJSON(district_hudson, {style: polystyle2});

const district_cathedral = {
	"type": "FeatureCollection",
	"name": "district-cathedral",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 5, "name": "cathedral" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.763100602763359, 42.650290439509568 ], [ -73.764244710181828, 42.649149962880905 ], [ -73.76360229880008, 42.648744276339052 ], [ -73.764393957270514, 42.647975851048756 ], [ -73.763654210830936, 42.647746753473086 ], [ -73.763459540715246, 42.647574929737608 ], [ -73.76246023412142, 42.645816095596082 ], [ -73.761550202902015, 42.645302564735964 ], [ -73.760768262102374, 42.646066142069124 ], [ -73.761914209825989, 42.646680963759557 ], [ -73.761294049881442, 42.647305695704546 ], [ -73.760215510847459, 42.646700796616152 ], [ -73.759703204806314, 42.647226365011683 ], [ -73.760417736916324, 42.647613101183794 ], [ -73.760053729992364, 42.647970086285525 ], [ -73.75933919788234, 42.647563519757625 ], [ -73.759015636172151, 42.647880840202156 ], [ -73.763100602763359, 42.650290439509568 ] ] ] ] } }
	]
}
const districtCathedral = new L.GeoJSON(district_cathedral, {style: polystyle2});

const district_market = {
	"type": "FeatureCollection",
	"name": "district-market",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 6, "name": "market" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.756484439876772, 42.650144180484219 ], [ -73.755992356442519, 42.649891325086806 ], [ -73.756133914690722, 42.649514519057931 ], [ -73.755655312994406, 42.649202164961515 ], [ -73.754785740898242, 42.649008802115787 ], [ -73.755291306070418, 42.648190721886479 ], [ -73.75429365746399, 42.647977523453342 ], [ -73.754981226098153, 42.646291742669355 ], [ -73.756093469476951, 42.64662890248092 ], [ -73.75583057558741, 42.647045391489925 ], [ -73.756625998124989, 42.647318091116148 ], [ -73.757596683255571, 42.647858528661295 ], [ -73.757974171917482, 42.647511459217618 ], [ -73.757677573683111, 42.647332965606836 ], [ -73.758041580607099, 42.646971018657119 ], [ -73.759113378772113, 42.647610622113405 ], [ -73.756484439876772, 42.650144180484219 ] ] ] ] } }
	]
}
const districtMarket = new L.GeoJSON(district_market, {style: polystyle2});

const district_pearl = {
	"type": "FeatureCollection",
	"name": "district-pearl",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 7, "name": "pearl" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.754232989643327, 42.647967607229361 ], [ -73.753983577491709, 42.647903151734987 ], [ -73.754071208788233, 42.64768499418151 ], [ -73.753848760112476, 42.64762549653414 ], [ -73.754549810484562, 42.645904998282312 ], [ -73.754785740898242, 42.645974414118562 ], [ -73.754691368732765, 42.646207452430929 ], [ -73.75492055827749, 42.646276867929693 ], [ -73.754232989643327, 42.647967607229361 ] ] ] ] } }
	]
}
const districtPearl = new L.GeoJSON(district_pearl, {style: polystyle2});

const district_gut = {
	"type": "FeatureCollection",
	"name": "district-gut",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
	{ "type": "Feature", "properties": { "id": 8, "name": "gut" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -73.753802654774262, 42.647611835793349 ], [ -73.753475497933934, 42.647534488749699 ], [ -73.753685813045564, 42.646907114730816 ], [ -73.752990604759887, 42.646786795702738 ], [ -73.753002288932748, 42.646468808579684 ], [ -73.751623556534227, 42.646296922971516 ], [ -73.751635240707103, 42.645665239281655 ], [ -73.750998453285746, 42.645587889817612 ], [ -73.751033505804372, 42.645188249387914 ], [ -73.751150347533056, 42.644659688747431 ], [ -73.751611872361366, 42.644827281631848 ], [ -73.754462810541355, 42.645605078595715 ], [ -73.754340126726234, 42.645850018167586 ], [ -73.754497863059967, 42.645892989922856 ], [ -73.753802654774262, 42.647611835793349 ] ] ] ] } }
	]
}
const districtGut = new L.GeoJSON(district_gut, {style: polystyle2});

const districts = [districtState, districtBoarding, districtHudson, districtCathedral, districtMarket, districtPearl, districtGut];

// District Labels
// const marker = new L.marker([42.6518, -73.7575], // 42.6503, -73.76 -- 42.65461619, -73.7615236
// 	{ opacity: 0.01 }); //opacity may be set to zero
// marker.bindTooltip("State Street <br/>Office District", 
// 	{permanent: true, className: "district-label", offset: [0, 0] });

// Create District Labels.
const labelTexts = [
	"State Street <br/>Office District", 
	"Rooming House <br/>District",
	"Hudson Ave <br/> Shopping District",
	"Rooming House <br/>District",
	"Cathedral Area <br/>Residential District",
	"Market District",
	"S. Pearl St <br/>Shopping <br/>District",
	"The Gut"
];
const labelLatLngs = [
	[42.6520, -73.7575],
	// 
	[42.6511, -73.7580],
	//
	[42.6503, -73.7584],
	//
	[42.6496, -73.7594],
	//
	[42.6484, -73.7635],
	//
	[42.6478, -73.7553],
	//
	[42.6466, -73.7531],
	//
	[42.6455, -73.7519]
	];
const districtLables = [];
for (let i = 0; i < labelTexts.length; i++) {
	let marker = new L.marker(
		labelLatLngs[i], 
		// For map marker (lollipop) -- make it invisible.
		{ opacity: 0.0 }
	); 
	marker.bindTooltip(labelTexts[i], 
		{permanent: true, className: "district-label", offset: [0, 0] });
	districtLables.push(marker);
}

// ----- set map -----
// regular map setting
const urmap = L.map('mapdiv', {
	center: [42.6503, -73.76], // -72.45
	zoom: 15, // 9
	layers: [stamen] // topobase stamen , siteMarkers hitchcock // , block_layer
});

// map._handlers.forEach(function(handler) {
//     handler.disable();
// });

urmap.dragging.disable();
urmap.touchZoom.disable();
urmap.doubleClickZoom.disable();
urmap.scrollWheelZoom.disable();
urmap.boxZoom.disable();
urmap.keyboard.disable();


function addSanborn() {
	if (!urmap.hasLayer(sanborn)) {
		urmap.addLayer(sanborn);
	}
	// Since State was first on it will be last to leave in reverse
	if (urmap.hasLayer(districtState)) {
		urmap.removeLayer(districtState);
	}
}

function removeSanborn() {
	if (urmap.hasLayer(sanborn)) {
		urmap.removeLayer(sanborn);
	}
}

function setPoint(lat, lon, zoomLevel) {
	urmap.setView([lat, lon], zoomLevel);
}

function showDistrict(lat, lon, zoomLevel, districtId) {
	setPoint(lat, lon, zoomLevel) ;
	// Because we can only get to this sequentially we (should)
	// know that it's not already present
	districts[districtId].addTo(urmap);
	// Remove any other districts.
	for (let i = 0; i < districts.length; i++) {
		if (i != districtId) { // don't delete the one we just added!			
			if (urmap.hasLayer(districts[i])) {
				// console.log(" -- got to not-take");
				urmap.removeLayer(districts[i]);
			}
		}
	}
	// Remove labels
	if (urmap.hasLayer(districtLables[0])) {
		// console.log(" -- got to not-take");
		for (let i = 0; i < districtLables.length; i++) {
			urmap.removeLayer(districtLables[i]);
		}
	}
}

function showAllDistricts(lat, lon, zoomLevel) {
	setPoint(lat, lon, zoomLevel) ;
	// remove any other districts
	for (let i = 0; i < districts.length; i++) {
		// don't add to what's already there
		if (!urmap.hasLayer(districts[i])) { 
			districts[i].addTo(urmap);
		}
	}
	// Add district labels
	for (let i = 0; i < districtLables.length; i++) {
		districtLables[i].addTo(urmap);
	}
}

// // Temp - for locating District Labels
// urmap.on('click', getLocation); 
// function getLocation(e) {
//     alert("Lat, Lon : " + e.latlng.lat.toFixed(4) + ", " + e.latlng.lng.toFixed(4));
// }

