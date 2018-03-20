console.log("I'm working")

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");



mapboxgl.accessToken = "pk.eyJ1Ijoib2hpcmljaGkiLCJhIjoiY2plenRlbHVoMGRzbjJ3b2RhdmpkNjc0ZyJ9.XnD8EBSBCPieAs8hA4OcmQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://icons.veryicon.com/32/System/Small%20%26%20Flat/map%20marker.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
