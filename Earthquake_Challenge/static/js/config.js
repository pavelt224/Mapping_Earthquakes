// API key
const API_KEY = "pk.eyJ1IjoicGF2ZWwyMjQiLCJhIjoiY2t6cml4eWg4MGc4NjJwbzFveWRtdzBzciJ9.RDOFy_o_VPsBkyX95PzKyg";

// Add GeoJSON data.
let sanFranAirport =
{
	"type": "FeatureCollection", "features": [{
		"type": "Feature",
		"properties": {
			"id": "3469",
			"name": "San Francisco International Airport",
			"city": "San Francisco",
			"country": "United States",
			"faa": "SFO",
			"icao": "KSFO",
			"alt": "13",
			"tz-offset": "-8",
			"dst": "A",
			"tz": "America/Los_Angeles"
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-122.375, 37.61899948120117]
		}
	}
	]
};