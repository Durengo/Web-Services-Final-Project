import React from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";

const MapContainer = () => {


    const mapStyles = {
        height: "400px",
        width: "60%",
    };

    const defaultCenter = {
        lat: 55.1735998,
        lng: 23.8948016,
    };


    return (
        <LoadScript googleMapsApiKey="AIzaSyDK7JtguLvN8BXLvIVX3tb1fwoAjenC9Nc" language="lt">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;