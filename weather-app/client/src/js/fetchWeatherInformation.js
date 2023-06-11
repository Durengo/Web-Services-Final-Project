import axios from "axios";
import {LOCAL_API_URL} from "../env/env";
import {setIsFetchingWeatherInformation, setWeatherInformation} from "../redux/actions/weatherInformationActions";
import {fetchCurrentLocationByIp} from "./fetchCurrentLocation";
import store from "../redux/store";

export const fetchWeatherInformationByCityName = (cityName) => {
    return async (dispatch) => {
        dispatch(setIsFetchingWeatherInformation(true)); // Set the fetching flag to true to indicate the state is being fetched
        if (!cityName) {
            dispatch(setIsFetchingWeatherInformation(false));
            console.log("Canceling dispatch city name is null.");
            return;
        }
        try {
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

export const fetchWeatherInformationByIP = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingWeatherInformation(true)); // Set the fetching flag to true to indicate the state is being fetched
        try {
            const ip = await dispatch(fetchCurrentLocationByIp());
            const state = await store.getState();
            console.log(store.getState());
            const response = await axios.get(`${LOCAL_API_URL}/` + state.currentLocation.city.name); // Perform the asynchronous operation to fetch the location
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

export const fetchWeatherInformationByCoordinates = (latitude, longitude) => {
    return async (dispatch) => {
        dispatch(setIsFetchingWeatherInformation(true)); // Set the fetching flag to true to indicate the state is being fetched
        try {
            const response = await axios.get(`${LOCAL_API_URL}/coordinates?lat=` + latitude + "&lon=" + longitude); // Perform the asynchronous operation to fetch the location
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