import axios, {get} from "axios";
import {LOCAL_API_URL} from "../env/env";
import {getClientIP} from "./getClientIP";
import {setCurrentLocation, setIsFetchingCurrentLocation} from "../redux/actions/currentLocationActions";
import {setIsFetchingWeatherInformation, setWeatherInformation} from "../redux/actions/weatherInformationActions";

export const fetchWeatherInformation = (cityName) => {
    return async (dispatch) => {
        dispatch(setIsFetchingWeatherInformation(true)); // Set the fetching flag to true to indicate the state is being fetched
        if(!cityName)
        {
            dispatch(setIsFetchingWeatherInformation(false));
            console.log("Canceling dispatch city name is null.");
            return;
        }
        try {
            const ip = await getClientIP();
            const response = await axios.get(`${LOCAL_API_URL}/` + cityName); // Perform the asynchronous operation to fetch the location
            const weather = response.data; // Extract the location data from the response
            console.log("Retrieved Data! Current Weather Information: ", weather);
            dispatch(setWeatherInformation(weather)); // Dispatch an action to set the fetched location state in Redux
        } catch (error) {
            console.error("Error fetching weather information:", error);
            dispatch(setWeatherInformation(null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsFetchingWeatherInformation(false));
        }
    };
};