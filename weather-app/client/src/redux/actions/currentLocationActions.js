export const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";
export const SET_IS_FETCHING_LOCATION = "SET_IS_FETCHING_CURRENT_LOCATION";

export const setCurrentLocation = (currentLocation) => {
    return {
        type: SET_CURRENT_LOCATION,
        payload: currentLocation,
    };
};

export const setIsFetchingCurrentLocation = (isFetchingCurrentLocation) => {
    return {
        type: SET_IS_FETCHING_LOCATION,
        payload: isFetchingCurrentLocation,
    };
};