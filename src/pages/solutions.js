import React, { useMemo } from 'react';
import { List, Row } from 'antd';
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
var waypointList = []
    // waypointList objects follow the nomenclature of [name, description, position (consisting of lat and longitude)].
    var populateArray = [

    /*
    Zac’s Summary

    Title: "Bat And Agave Conservation Project"
    Description: "Assist and enhance agave and bat populations."
    Coordinates: [32.248000, -112.916100]

    Title: "Blue Heart Mangrove Restoration"
    Description: "Preservation and restoration of red mangrove sites in the ‘Blue Heart’ zone and potentially coastal area within the Sunshine Coast Council Group constituency."
    Coordinates: [-26.5175, 153.0341]

    Title: "Borneo Orangutan Project"
    Description: "Assist and protect orangutans and their forest homes."
    Coordinates: [0.1378, 117.4970]

    Title: "CCC Athens Recovery"
    Description: "Reestablishment of landscape after wildfire."
    Coordinates: [37.9464, 23.8167]

    Title: "Daintree Rainforest Conservation"
    Description: "Restore previously farmed land to its original rainforest condition. The Daintree Rainforest is the oldest rainforest on Earth around 180 million years old – older than the Amazon Rainforest and one of the best biologically diverse rainforests in the world."
    Coordinates: [-16.26188066268747, 145.4441841548669]

*/
    {
        "Name"        : "Bat And Agave Conservation Project",
        "Description" : "Assist and enhance agave and bat populations.",
        "Position"    : [32.248000, -112.916100]
    }, 
    {
        "Name"        : "Blue Heart Mangrove Restoration",
        "Description" : "Preservation and restoration of red mangrove sites in the ‘Blue Heart’ zone and potentially coastal area within the Sunshine Coast Council Group constituency.",
        "Position"    : [-26.5175, 153.0341]
    },
    {
        "Name"        : "Borneo Orangutan Project",
        "Description" : "Assist and protect orangutans and their forest homes.",
        "Position"    : [0.1378, 117.4970]
    },
    {
        "Name"        : "CCC Athens Recovery",
        "Description" : "Reestablishment of landscape after wildfire.",
        "Position"    : [37.9464, 23.8167]
    },
    {
        "Name"        : "Daintree Rainforest Conservation",
        "Description" : "Restore previously farmed land to its original rainforest condition. The Daintree Rainforest is the oldest rainforest on Earth around 180 million years old – older than the Amazon Rainforest and one of the best biologically diverse rainforests in the world.",
        "Position"    : [-16.26188066268747, 145.4441841548669]
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
            maxBounds={[[-90, -180],[90, 180]]}
        >
        <TileLayer  
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            minZoom='2'
            noWrap="true"
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

populateMarkers(populateArray);

function CreateList () {
    const DisplayList = useMemo( () => (
        <List 
        id="solutionList"
        dataSource={waypointList}
        header={<h1>Solutions</h1>}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta 
                    title={<h2>{item.Name}</h2>}
                    description={<div className="standardText">{item.Description}</div>}
                />

            </List.Item>
        )}
        
        />

        
    ), [], )

    return(
        <div>
            {DisplayList}
        </div>
    );

}






// Finally, the actual section that renders the page.
const Solutions = () => { 
    return(
        <div>
            <Row>
            <CreateMap  />
            
            <CreateList />
            </Row>
        </div>
    ); 
}

export default Solutions;


