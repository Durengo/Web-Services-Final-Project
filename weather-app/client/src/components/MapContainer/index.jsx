import React, {useState } from "react";
import {GoogleMap, LoadScript, Polygon} from "@react-google-maps/api";

const MapContainer = () => {
    const [polygonCoords, setPolygonCoords] = useState([
        { lat: 55.1735998, lng: 23.8948016 },
        { lat: 55.1735998, lng: 23.9948016 },
        { lat: 55.1935998, lng: 23.8948016 },
        ])

    const mapStyles = {
        height: "400px",
        width: "100%",
    };

    const defaultCenter = {
        lat: 55.1735998,
        lng: 23.8948016,
    };

    const polygonOptions = {
        paths: polygonCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    }

    const updatePolygonCoords = () => {
        const newCoords = [
            { lat: 56.1735998, lng: 24.8948016 },
            { lat: 54.1735998, lng: 23.8948016 },
            { lat: 53.1735998, lng: 22.8948016 },
        ];
        setPolygonCoords(newCoords);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDK7JtguLvN8BXLvIVX3tb1fwoAjenC9Nc">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Polygon path={polygonCoords} options={polygonOptions} />
            </GoogleMap>
            <button onClick={updatePolygonCoords}>Update Polygon</button>
        </LoadScript>
    );
};

export default MapContainer;