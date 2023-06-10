import React, { useEffect } from "react";
// Styles
import "./WeatherMain.css";
// Components
import MapContainer from "../MapContainer";
import DetailsComponent from "../Details";
import CurrentConditionsComponent from "../CurrentConditions";
import SliderComponent from "../Slider";
import NavbarComponent from "../Navbar";
import TestSliderComponent from "../TestSlider";

// Scripts
// import { getClientIP } from "../../js/getClientIP.js";

// Data
import { weatherMainData } from "../../js/App";
import {fetchCurrentLocation} from "../../js/fetchCurrentLocation";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherInformation} from "../../js/fetchWeatherInformation";


function WeatherMain(props) {
    const {} = props;
    const dispatch = useDispatch();


    const fetchingCurrentLocation = useSelector((state) => state.isFetchingCurrentLocation);

    useEffect(() => {
        dispatch(fetchCurrentLocation());
    }, [dispatch]);
    const currentLocation = useSelector((state) => state.currentLocation);

    useEffect(() => {
        if(!fetchingCurrentLocation || currentLocation !== null)
        {
            dispatch(fetchWeatherInformation(currentLocation.city.name));
        }
    }, [dispatch, currentLocation]);

    // if (!fetchingCurrentLocation)


    return (
        <div className="weather-site1">
            <NavbarComponent {...weatherMainData}/>
            <img className="line" src="/img/line.svg" alt="Line" />
            <div className="flex-row-1">
                <CurrentConditionsComponent {...weatherMainData}/>
                <DetailsComponent {...weatherMainData}/>
            </div>

            <TestSliderComponent/>
            <div className="text-label-map">Map of weather conditions</div>
            <MapContainer />
        </div>
    );
}

export default WeatherMain;
