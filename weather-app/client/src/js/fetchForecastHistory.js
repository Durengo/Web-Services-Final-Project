import axios, {get} from "axios";
import {LOCAL_API_URL} from "../env/env";
import {getClientIP} from "./getClientIP";
import {setForecastHistory, setIsFetchingForecastHistory} from "../redux/actions/forecastHistoryActions";

export const fetchForecastHistory = (cityName, startDate, endDate) => {
    return async (dispatch) => {
        dispatch(setIsFetchingForecastHistory(true)); // Set the fetching flag to true to indicate the state is being fetched
        if(!cityName)
        {
            dispatch(setIsFetchingForecastHistory(false));
            console.log("Canceling dispatch city name is null.");
            return;
        }
        console.log(`${LOCAL_API_URL}/history/` + cityName + "?start=" + startDate, + "&end=" + endDate);
        try {
            const ip = await getClientIP();
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