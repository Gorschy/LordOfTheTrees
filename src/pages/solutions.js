import React, {Component} from 'react';
import '../style.css';
import './solutions.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import treeIcon from '../assets/treeIcon50x50.png';

var waypointIcon = L.icon({ 
    // Details of the icon.
    iconUrl: treeIcon,
    iconSize: [50,50],
    iconAnchor: [25.5, 50],
    popupAnchor: [0, -50]

})

class Solutions extends Component {
    waypoint = {
        lat: -34.4053906026069,
        lng: 150.87848364203003,
    }
    
    startingZoom = 2;

    render () {
        const location = [this.waypoint.lat, this.waypoint.lng];
    return (
        <div>
        <MapContainer id="map" center={location} zoom={this.startingZoom} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            minZoom='2'
        />
        <Marker position={location} icon={waypointIcon}>
            <Popup>
            I wonder what lives here. <br /> (UOW, if you couldn't tell.)
            </Popup>
        </Marker>
        </MapContainer>
        </div>
    );}
}

export default Solutions;