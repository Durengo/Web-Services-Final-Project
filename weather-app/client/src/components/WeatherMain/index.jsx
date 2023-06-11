import React, {useEffect, useRef, useState} from "react";
// Styles
import "./WeatherMain.css";
// Components
import MapContainer from "../MapContainer";
import DetailsComponent from "../Details";
import CurrentConditionsComponent from "../CurrentConditions";
import SliderComponent from "../Slider";
import NavbarComponent from "../Navbar";


// Scripts
// import { getClientIP } from "../../js/getClientIP.js";

// Data
import {weatherMainData} from "../../js/App";
import {fetchCurrentLocationByIp} from "../../js/fetchCurrentLocation";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherInformationByCoordinates, fetchWeatherInformationByIP} from "../../js/fetchWeatherInformation";
import {getSunriseAndSunset} from "../../js/conversion";
import {fetchForecastHistoryByCoordinates, fetchForecastHistoryByIp} from "../../js/fetchForecastHistory";
import {
    setMapCoordinates,
    setMapCoordinatesFirstTime,
    setPreviousMapCoordinates
} from "../../redux/actions/mapCoordinatesActions";
import {setSessionDateToday, setSessionUsingIp} from "../../redux/actions/session";
import {setDateToday} from "../../js/setDateToday";


function WeatherMain(props) {
    const {} = props;
    const dispatch = useDispatch();
    const isMountedRef = useRef(false);

    // Setting Date For States
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    //let formattedDate;

    const currentLocation = useSelector((state) => state.currentLocation);
    const weatherInformation = useSelector((state) => state.weatherInformation);

    const sessionIp = useSelector((state) => state.sessionIp);
    const sessionDateToday = useSelector((state) => state.sessionDateToday);
    const isUpdatingSessionDateToday = useSelector((state) => state.isUpdatingSessionDateToday);
    const sessionUsingIp = useSelector((state) => state.sessionUsingIp);

    const mapCoordinates = useSelector((state) => state.mapCoordinates);
    const previousMapCoordinates = useSelector((state) => state.previousMapCoordinates);
    const mapCoordinatesFirstTime = useSelector((state) => state.mapCoordinatesFirstTime);
    const isFetchingMapCoordinates = useSelector((state) => state.isFetchingMapCoordinates);

    const isFetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);
    const isFetchingWeatherInformation = useSelector((state) => state.isFetchingWeatherInformation);

    const calledOnce = useRef(false);


    useEffect(() => {
        if (!isMountedRef.current) {
            dispatch(setDateToday());
            dispatch(setSessionUsingIp(true));
            // dispatch(fetchCurrentLocationByIp());

            // dispatch(setMapCoordinates(currentLocation.location.latitude, currentLocation.location.longitude));
            // console.log("ONE CALL ONLY");
            isMountedRef.current = true;
        }
    }, []);

    useEffect(() => {
        if (sessionUsingIp) {
            // dispatch(fetchCurrentLocationByIp());
            dispatch(fetchWeatherInformationByIP());

            // dispatch(setMapCoordinates(currentLocation.location.latitude, currentLocation.location.longitude));
            // console.log("USING IP CALL ONLY");
            dispatch(setSessionUsingIp(false));
        }
    }, [sessionUsingIp]);

    useEffect(() => {
        if (weatherInformation && !isFetchingCurrentLocation && !isFetchingWeatherInformation) {
            if ((previousMapCoordinates !== null && mapCoordinates !== null)) {
                dispatch(setMapCoordinates(weatherInformation.location.lat, weatherInformation.location.lon));
                dispatch(setPreviousMapCoordinates(weatherInformation.location.lat, weatherInformation.location.lon));
            } else if ((previousMapCoordinates.latitude !== mapCoordinates.latitude)
                && (previousMapCoordinates.longitude !== mapCoordinates.longitude)) {
                dispatch(setPreviousMapCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
                dispatch(setMapCoordinates(weatherInformation.location.lat, weatherInformation.location.lon));
                // console.log("Dispatch called!");
                //
                // const timeout = setTimeout(() => {
                //     dispatch(fetchWeatherInformationByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
                //     console.log("Dispatch called!");
                // }, 1000);
            }
        }
    }, [weatherInformation, isFetchingCurrentLocation, isFetchingWeatherInformation]);

    useEffect(() => {
        if(mapCoordinatesFirstTime)
        {
            dispatch(fetchWeatherInformationByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
            dispatch(setMapCoordinatesFirstTime(false));
        }
    }, [mapCoordinatesFirstTime]);

    useEffect(() => {
        if (mapCoordinates && !isFetchingMapCoordinates) {
            console.log(`New Map Coordinates: ${mapCoordinates.latitude}:${mapCoordinates.longitude}`);
            console.log(`Previous Map Coordinates: ${previousMapCoordinates.latitude}:${previousMapCoordinates.longitude}`);
            if(mapCoordinatesFirstTime)
            {
                dispatch(fetchWeatherInformationByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
                dispatch(setMapCoordinatesFirstTime(false));
            }
        }
    }, [mapCoordinates, isFetchingMapCoordinates]);

    useEffect(() => {
        if (mapCoordinates && !isFetchingWeatherInformation) {
            //dispatch(fetchWeatherInformationByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
        }
    }, [mapCoordinates, isFetchingWeatherInformation]);

    useEffect(() => {
        if (sessionDateToday && !isUpdatingSessionDateToday) {
            console.log(`Today day set to: ${sessionDateToday.year}-${sessionDateToday.month}-${sessionDateToday.day}`);
            // formattedDate = `${sessionDateToday.year}-${sessionDateToday.month}-${sessionDateToday.day}`;
            // console.log("da date: " + formattedDate);
        }
    }, [sessionDateToday, isUpdatingSessionDateToday]);

    // useEffect(() => {
    //     if (!fetchingCurrentLocation && currentLocation) {
    //         dispatch(fetchWeatherInformation(currentLocation.city.name));
    //     }
    // }, [dispatch, currentLocation, fetchingCurrentLocation]);

    useEffect(() => {
        if (weatherInformation && sessionDateToday && !isFetchingWeatherInformation && !isUpdatingSessionDateToday) {
            if(sessionUsingIp)
            {
                dispatch(fetchForecastHistoryByIp(`${formattedDate}`, `${formattedDate}`));
            }
            else
            {
                dispatch(fetchForecastHistoryByCoordinates(mapCoordinates.latitude, mapCoordinates.longitude, `${formattedDate}`, `${formattedDate}`));
            }
        }
    }, [dispatch, weatherInformation, isFetchingWeatherInformation, sessionDateToday, isUpdatingSessionDateToday]);

    // useEffect(() => {
    //     if (!fetchingCurrentLocation && currentLocation) {
    //         dispatch(setMapCoordinates(currentLocation.location.latitude, currentLocation.location.longitude));
    //         // dispatch(setSessionUsingIp(false));
    //     }
    // }, [dispatch, currentLocation, fetchingCurrentLocation]);
    //
    // useEffect(() => {
    //     if(currentLocation && mapCoordinates && mapCoordinatesFirstTime)
    //     {
    //         console.log("map cooooooord");
    //         dispatch(changeCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
    //     }
    // }, [dispatch, currentLocation, mapCoordinates, mapCoordinatesFirstTime]);

    // useEffect(() => {
    //     if (mapCoordinates.latitude && mapCoordinates.longitude && !isFetchingCurrentLocation) {
    //         const timeout = setTimeout(() => {
    //             dispatch(changeCoordinates(mapCoordinates.latitude, mapCoordinates.longitude));
    //         }, 1000);
    //     }
    // }, [dispatch, mapCoordinates.latitude, mapCoordinates.longitude, isFetchingCurrentLocation]);

    // if (!fetchingCurrentLocation)

    // console.log(getSunriseAndSunset(54.6872, 25.2797));

    return (
        <div className="weather-site1">

            <div className="flex-row-1">
                <CurrentConditionsComponent {...weatherMainData}/>
                <DetailsComponent {...weatherMainData}/>
            </div>

            <SliderComponent/>
            <div className="text-label-map">Map of weather conditions</div>
            <MapContainer/>
        </div>
    );
}

export default WeatherMain;
