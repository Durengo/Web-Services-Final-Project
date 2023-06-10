import React, {useRef} from "react";
import {Circle, GoogleMap, LoadScript} from "@react-google-maps/api";
import React, { useState } from "react";

const MapContainer = () => {
    const [circleCenter, setCircleCenter] = useState({
        lat: 55.1735998,
        lng: 23.8948016,
    });
    const [isCircleVisible, setIsCircleVisible] = useState(true);
    const mapRef = useRef(null);

    const mapStyles = {
        height: "400px",
        width: "60%",
    };

    const calculateCircleRadius = (zoomLevel) => {
        // Return the radius based on the zoom level
        if (zoomLevel <= 7) {
            return 16000;
        } else if (zoomLevel <= 9) {
            return 10000;
        } else if (zoomLevel <= 11) {
            return 6000;
        } else if (zoomLevel <= 12) {
            return 4000;
        } else if (zoomLevel <= 13) {
            return 3000;
        } else if (zoomLevel <= 14) {
            return 2500;
        } else if (zoomLevel <= 15) {
            return 2000;
        } else if (zoomLevel <= 16) {
            return 1500;
        } else if (zoomLevel <= 17) {
            return 1500;
        } else if (zoomLevel <= 18) {
            return 1000;
        } else {
            return 1000;
        }
    };

    const circleOptions = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        clickable: true,
        draggable: false,
        editable: false,
        visible: isCircleVisible,
        radius: calculateCircleRadius(mapRef.current?.getZoom()), // Call the function to calculate the circle radius
        center: circleCenter,
    };

    const handleMapClick = (e) => {
        const clickedLatLng = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        };
        setCircleCenter(clickedLatLng);
        setIsCircleVisible(true);
    };

    const handleMapLoad = (map) => {
        mapRef.current = map; // Store the map reference in the ref
    };

    const handleMapZoomChanged = () => {
        const zoomLevel = mapRef.current?.getZoom(); // Get the zoom level from the map reference
        const circleRadius = calculateCircleRadius(zoomLevel);
        circleOptions.radius = circleRadius;
        setCircleCenter({ ...circleCenter }); // Trigger re-render
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDK7JtguLvN8BXLvIVX3tb1fwoAjenC9Nc" language="lt">

            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={circleCenter}
                onClick={handleMapClick}
                onLoad={handleMapLoad}
                onZoomChanged={handleMapZoomChanged}
            >
                {isCircleVisible && <Circle options={circleOptions} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;