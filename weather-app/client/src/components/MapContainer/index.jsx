import React, {useEffect, useRef, useState} from "react";
import {Circle, GoogleMap} from "@react-google-maps/api";
import {useDispatch, useSelector} from "react-redux";
import {setMapCoordinates, setMapCoordinatesFirstTime} from "../../redux/actions/mapCoordinatesActions";

const MapContainer = () => {
    const dispatch = useDispatch();

    const currentLocation = useSelector((state) => state.currentLocation);
    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);
    const mapCoordinates = useSelector((state) => state.mapCoordinates);
    const isFetchingMapCoordinates = useSelector((state) => state.isFetchingMapCoordinates);

    const [circleCenter, setCircleCenter] = useState(null);
    const [isCircleVisible, setIsCircleVisible] = useState(true);
    const mapRef = useRef(null);

    const firstTime = false;

    useEffect(() => {
        if (mapCoordinates && !isFetchingMapCoordinates) {
            console.log(`Map Coordinates: ${mapCoordinates.latitude}:${mapCoordinates.longitude}`);
            setCircleCenter({lat: mapCoordinates.latitude, lng: mapCoordinates.longitude});
            setIsCircleVisible(true);
        }
    }, [dispatch, mapCoordinates, isFetchingMapCoordinates]);

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
        const latitude = e.latLng.lat();
        const longitude = e.latLng.lng();
        // console.log(`OnClick coordinates: ${latitude}:${longitude}`);
        dispatch(setMapCoordinates(latitude, longitude));
        dispatch(setMapCoordinatesFirstTime(true));

    };

    const handleMapLoad = (map) => {
        mapRef.current = map; // Store the map reference in the ref
    };

    const handleMapZoomChanged = () => {
        const zoomLevel = mapRef.current?.getZoom(); // Get the zoom level from the map reference
        circleOptions.radius = calculateCircleRadius(zoomLevel);
        setCircleCenter({...circleCenter}); // Trigger re-render
    };

    if (isFetchingCurrentLocation || isFetchingWeatherInformation) {
        return <div>LOADING...</div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={circleCenter}
            onClick={handleMapClick}
            onLoad={handleMapLoad}
            onZoomChanged={handleMapZoomChanged}
        >
            {isCircleVisible && <Circle options={circleOptions}/>}
        </GoogleMap>
    );
};

export default MapContainer;