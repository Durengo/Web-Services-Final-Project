export const SET_MAP_COORDINATES = "SET_MAP_COORDINATES";
export const SET_PREVIOUS_MAP_COORDINATES = "SET_PREVIOUS_MAP_COORDINATES";
export const SET_IS_FETCHING_MAP_COORDINATES = "SET_IS_FETCHING_MAP_COORDINATES";
export const SET_MAP_COORDINATES_FIRST_TIME = "SET_MAP_COORDINATES_FIRST_TIME";
export const setMapCoordinates = (latitude, longitude) => {
    return {
        type: SET_MAP_COORDINATES,
        payload: {
            latitude: latitude,
            longitude: longitude,
        },
    };
};
export const setPreviousMapCoordinates = (latitude, longitude) => {
    return {
        type: SET_PREVIOUS_MAP_COORDINATES,
        payload: {
            latitude: latitude,
            longitude: longitude,
        },
    };
};
export const setMapCoordinatesFirstTime = (mapCoordinatesFirstTime) => {
    return {
        type: SET_MAP_COORDINATES_FIRST_TIME,
        payload: mapCoordinatesFirstTime,
    };
};
export const setIsFetchingMapCoordinates = (isFetchingMapCoordinates) => {
    return {
        type: SET_IS_FETCHING_MAP_COORDINATES,
        payload: isFetchingMapCoordinates,
    };
};