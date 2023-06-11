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

    // useEffect(() => {
    //     if(currentLocation && !isFetchingCurrentLocation)
    //     {
    //         if(!currentLocation.location.latitude || !currentLocation.location.longitude)
    //         {
    //             // break;
    //         }
    //         else
    //         {
    //             console.log(`Current location: ${currentLocation.location.latitude}:${currentLocation.location.longitude}`)
    //             // dispatch(setMapCoordinates(currentLocation.location.latitude, currentLocation.location.longitude));
    //             setCircleCenter({
    //                 lat: currentLocation.location.latitude,
    //                 lng: currentLocation.location.longitude,
    //             });
    //             setIsCircleVisible(true);
    //             // changeCoordinates(mapCoordinates.latitude, mapCoordinates.longitude);
    //             // setCircleCenter({lat: mapCoordinates.latitude, lng: mapCoordinates.longitude});
    //         }
    //
    //     }
    // }, [dispatch, currentLocation, isFetchingCurrentLocation]);

    // useEffect(() => {
    //    if(circleCenter)
    //    {
    //        setCircleCenter(clickedCoordinates);
    //        setIsCircleVisible(true);
    //
    //    }
    // }, [circleCenter, currentLocation, clickedCoordinates]);
    //



    useEffect(() => {
        if(mapCoordinates && !isFetchingMapCoordinates)
        {
            console.log(`Map Coordinates: ${mapCoordinates.latitude}:${mapCoordinates.longitude}`);
            setCircleCenter({lat: mapCoordinates.latitude, lng: mapCoordinates.longitude});
            setIsCircleVisible(true);
            // const timeout = setTimeout(() => {
            //     dispatch(changeCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
            // }, 1000);
            // dispatch(changeCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
        }
    }, [dispatch, mapCoordinates, isFetchingMapCoordinates]);




    // const [circleCenter, setCircleCenter] = useState({
    //     // lat: 55.1735998,
    //     // lng: 23.8948016,
    //     lat: currentLocation.location.latitude,
    //     lng: currentLocation.location.longitude,
    // });
    // const [isCircleVisible, setIsCircleVisible] = useState(true);
    // const mapRef = useRef(null);

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
        // dispatch(setMapCoordinatesFirstTime(false));
        const latitude = e.latLng.lat();
        const longitude = e.latLng.lng();



        console.log(`OnClick coordinates: ${latitude}:${longitude}`);
        // setClickedCoordinates({
        //     latitude: e.latLng.lat(),
        //     longitude: e.latLng.lng(),
        // });
        // dispatch(setMapCoordinates(e.latLng.lat(), e.latLng.lng()));
        dispatch(setMapCoordinates(latitude, longitude));
        dispatch(setMapCoordinatesFirstTime(true));
        // dispatch(setMapCoordinatesFirstTime(false));

        // dispatch(changeCoordinates(latitude, longitude));
        // mapCoordinates.latitude = e.latLng.lat();
        // mapCoordinates.longitude = e.latLng.lng();

        // setClickedCoordinatesLatitude(e.latLng.lat());
        // setClickedCoordinatesLongitude(e.latLng.lng());


        // setCircleCenter({lat: clickedCoordinates.latitude, lng: clickedCoordinates.longitude});
        // setIsCircleVisible(true);


        // const clickedLatLng = {
        //     lat: e.latLng.lat(),
        //     lng: e.latLng.lng(),
        // };
        // console.log(`${clickedLatLng.lat}:${clickedLatLng.lng}`);

        // console.log(`${clickedCoordinates.latitude}:${clickedCoordinates.longitude}`);


        // dispatch(setMapCoordinates({latitude: clickedLatLng.lat, longitude: clickedLatLng.lng}));
    };

    // useEffect(() => {
    //    if(circleCenter)
    //    {
    //
    //    }
    // });

    const handleMapLoad = (map) => {
        mapRef.current = map; // Store the map reference in the ref
    };

    const handleMapZoomChanged = () => {
        const zoomLevel = mapRef.current?.getZoom(); // Get the zoom level from the map reference
        circleOptions.radius = calculateCircleRadius(zoomLevel);
        setCircleCenter({ ...circleCenter }); // Trigger re-render
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
                {isCircleVisible && <Circle options={circleOptions} />}
            </GoogleMap>
    );
};

export default MapContainer;