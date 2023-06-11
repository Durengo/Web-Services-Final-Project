import axios from "axios";
import {LOCAL_API_URL} from "../env/env";
import {setForecastHistory, setIsFetchingForecastHistory} from "../redux/actions/forecastHistoryActions";
import store from "../redux/store";

export const fetchForecastHistoryByIp = (startDate, endDate) => {
    return async (dispatch) => {
        dispatch(setIsFetchingForecastHistory(true)); // Set the fetching flag to true to indicate the state is being fetched
        if (!startDate || !endDate) {
            dispatch(setIsFetchingForecastHistory(false));
            console.log("Canceling dispatch start or end date is null.");
            return;
        }
        console.log("REQUEST: " + `${LOCAL_API_URL}/history/coordinates?start=` + startDate + "&end=" + endDate);
        try {
            // const ip = await dispatch(fetchCurrentLocationByIp());
            const state = await store.getState();
            const cityName = state.currentLocation.city.name;
            console.log(store.getState());
            const response = await axios.get(`${LOCAL_API_URL}/history/` + cityName + "?start=" + startDate + "&end=" + endDate); // Perform the asynchronous operation to fetch the location
            const forecast = response.data; // Extract the location data from the response
            console.log("Retrieved Data! Current Forecast History: ", forecast);
            dispatch(setForecastHistory(forecast)); // Dispatch an action to set the fetched location state in Redux
        } catch (error) {
            console.error("Error fetching weather information:", error);
            dispatch(setForecastHistory(null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsFetchingForecastHistory(false));
        }
    };
};

export const fetchForecastHistoryByCoordinates = (latitude, longitude, startDate, endDate) => {
    return async (dispatch) => {
        dispatch(setIsFetchingForecastHistory(true)); // Set the fetching flag to true to indicate the state is being fetched
        if (!latitude || !longitude) {
            dispatch(setIsFetchingForecastHistory(false));
            console.log("Canceling dispatch latitude or longitude is null.");
            return;
        }
        console.log("REQUEST: " + `${LOCAL_API_URL}/history/coordinates?lat=` + latitude + "&lon=" + longitude + "&start=" + startDate + "&end=" + endDate);
        try {
            const response = await axios.get(`${LOCAL_API_URL}/history/coordinates?lat=` + latitude + "&lon=" + longitude + "&start=" + startDate + "&end=" + endDate); // Perform the asynchronous operation to fetch the location
            const forecast = response.data; // Extract the location data from the response
            console.log("Retrieved Data! Current Forecast History: ", forecast);
            dispatch(setForecastHistory(forecast)); // Dispatch an action to set the fetched location state in Redux
        } catch (error) {
            console.error("Error fetching weather information:", error);
            dispatch(setForecastHistory(null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsFetchingForecastHistory(false));
        }
    };
};