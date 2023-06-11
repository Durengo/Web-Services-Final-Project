import React, { useEffect } from "react";
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
import { weatherMainData } from "../../js/App";
import {fetchCurrentLocation} from "../../js/fetchCurrentLocation";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherInformation} from "../../js/fetchWeatherInformation";
import {getSunriseAndSunset} from "../../js/conversion";
import {fetchForecastHistory} from "../../js/fetchForecastHistory";


function WeatherMain(props) {
    const {} = props;
    const dispatch = useDispatch();
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

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

    useEffect(() => {
        if(!fetchingCurrentLocation || currentLocation !== null)
        {
            dispatch(fetchForecastHistory(currentLocation.city.name, formattedDate, formattedDate));
        }
    }, [dispatch, currentLocation]);

    // if (!fetchingCurrentLocation)

    // console.log(getSunriseAndSunset(54.6872, 25.2797));

    return (
        <div className="weather-site1">
            <NavbarComponent {...weatherMainData}/>
            <img className="line" src="/img/line.svg" alt="Line" />
            <div className="flex-row-1">
                <CurrentConditionsComponent {...weatherMainData}/>
                <DetailsComponent {...weatherMainData}/>
            </div>

            <SliderComponent/>
            <div className="text-label-map">Map of weather conditions</div>
            <MapContainer />
        </div>
    );
}

export default WeatherMain;
