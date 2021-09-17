import React, { useMemo } from 'react';
import '../style.css';
import './solutions.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import treeIcon from '../assets/treeIcon50x50.png';

/* ========================================
COMMENTS BY: Zachary O'Reilly-Fullerton
======================================== */

// Variable initialization.
// This, as you may imagine is the beginning level of zoom for the map. The higher the number, the higher the zoom. Personally,
// I think that a standard zoom of 2 is excellent, however as the map element size shrinks, we may increase the zoom level.
const startingZoom = 2; 
// The starting location of the map, whilst this is so zoomed out, it has no real point, however we may change this later.
const startVariables = [
    0, //Start Latitude
    0, //Start Longitude
];

// This is the details for the custom icon that we have used, the image of the tree... which was screenshotted from an email
// with Aymeric himself, how fancy. The anchor values are where the popup ties to. Please for the love of all that is nice
// in the world DO NOT CHANGE THIS UNLESS YOU KNOW WHAT YOU ARE DOING!
const waypointIcon = L.icon({ 
    iconUrl: treeIcon,
    iconSize: [50,50],
    iconAnchor: [25.5, 50],
    popupAnchor: [0, -50]
})

// This is the standard list of waypoints to add to the map. This array is added to by the call to the database.
// For the moment it is filled with placeholder data for proof of concept.
var waypointList = [
    // waypointList objects follow the nomenclature of [name, description, position (consisting of lat and longitude)].
    {
        "Name"        : "University of Wollongong",
        "Description" : "I wonder what is here... (UOW, if you couldn't tell.)", 
        "Position"    : [-34.4053906026069, 150.87848364203003]

    }, 
    {
        "Name"        : "n2",
        "Description" : "Desc2", 
        "Position"    : [-21.4053906026069, 111.87848364203003]
    }, 
    {
        "Name"        : "n3",
        "Description" : "Desc3", 
        "Position"    : [-12, 15]
    }

];

// This is the function that takes an inputted array, theoretically from a database and incrementally pushes it onto the
// above array of waypoints. Pretty simple stuff.
function populateMarkers(solutionsArray) {
    // solutionsArray theoretically = [name, description, position]
    solutionsArray.forEach(solutionItem => {
        waypointList.push(
        {
            "Name"        : solutionItem.Name,
            "Description" : solutionItem.Description, 
            "Position"    : solutionItem.Position
        }
    ) 
    });
};


// Here is where the butter meets the bread and we get moving.
// A map is memoized and is displayed with the variable element of "Waypoints".
// The variable element is created below.
function CreateMap() {
   
    // Creates the content to be returned.
    const DisplayMap = useMemo( () => (
        <MapContainer 
            id="map" 
            center={startVariables} 
            zoom={startingZoom} 
            scrollWheelZoom={true}
        >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            minZoom='2'
        />
        <Waypoints />
        </MapContainer>
    ), [],)
    
    return (
        <div>
        {DisplayMap}
        </div>
    )
}

// This function takes the waypoint list and maps it to the marker tags. It may not look like much
// but this is the resultant code of 8 hours of research and struggle.
function Waypoints () {
    return (
        waypointList.map((waypoint) => (
            <React.Fragment key={waypoint.Name}>
            <Marker position={(waypoint.Position)} icon={waypointIcon}>
                <Popup>
                    <div>   
                    <div className="markerHeader"><b>{waypoint.Name}</b></div> 
                        <br/>
                    <div className="markerDescription">{waypoint.Description}</div>
                    </div>
                </Popup>
            </Marker>
            </React.Fragment>
        ))
    );
}

// Function call to the populateMarkers function with a bit of test code for proof of concept.
populateMarkers([{
        "Name"        : "test",
        "Description" : "testdescription", 
        "Position"    : [24.1, 51.2]
}]);

// Finally, the actual section that renders the page.
const Solutions = () => { 
    return(
        <CreateMap  />
    ); 
}

export default Solutions;