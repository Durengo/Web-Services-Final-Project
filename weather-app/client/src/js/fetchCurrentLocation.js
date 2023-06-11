import axios from "axios";
import {LOCAL_API_URL} from "../env/env";
import {getClientIP} from "./getClientIP";
import {setCurrentLocation, setIsFetchingCurrentLocation} from "../redux/actions/currentLocationActions";

export const fetchCurrentLocationByIp = () => {
    return async (dispatch) => {
        dispatch(setIsFetchingCurrentLocation(true)); // Set the fetching flag to true to indicate the state is being fetched
        try {
            const ip = await getClientIP();
            const response = await axios.get(`${LOCAL_API_URL}/ipinfo?ip=${ip}`); // Perform the asynchronous operation to fetch the location
            const location = response.data; // Extract the location data from the response
            console.log("Retrieved Data! Client Current Location: ", location);
            dispatch(setCurrentLocation(location)); // Dispatch an action to set the fetched location state in Redux
        } catch (error) {
            console.error("Error fetching location:", error);
            dispatch(setCurrentLocation(null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsFetchingCurrentLocation(false));
        }
    };
};

export const fetchCurrentLocationByCoordinates = (latitude, longitude) => {
    return async (dispatch) => {
        dispatch(setIsFetchingCurrentLocation(true)); // Set the fetching flag to true to indicate the state is being fetched
        try {
            const response = await axios.get(`${LOCAL_API_URL}/coordinates?lat=${latitude}&lon=${longitude}`); // Perform the asynchronous operation to fetch the location
            const location = response.data; // Extract the location data from the response
            console.log("Retrieved Data! Client Current Location: ", location);
            dispatch(setCurrentLocation(location)); // Dispatch an action to set the fetched location state in Redux
        } catch (error) {
            console.error("Error fetching location:", error);
            dispatch(setCurrentLocation(null)); // Set the fetching flag to false in case of an error
        } finally {
            dispatch(setIsFetchingCurrentLocation(false));
        }
    };
};