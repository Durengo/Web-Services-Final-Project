export const SET_MAP_COORDINATES = "SET_MAP_COORDINATES";
export const SET_IS_FETCHING_MAP_COORDINATES = "SET_IS_FETCHING_MAP_COORDINATES";

export const setMapCoordinates = (mapCoordinates) => {
    return {
        type: SET_MAP_COORDINATES,
        payload: mapCoordinates,
    };
};

export const setIsFetchingMapCoordinates = (isFetchingMapCoordinates) => {
    return {
        type: SET_IS_FETCHING_MAP_COORDINATES,
        payload: isFetchingMapCoordinates,
    };
};