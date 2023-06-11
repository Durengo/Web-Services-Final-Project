export const SET_WEATHER_INFORMATION = "SET_WEATHER_INFORMATION";
export const SET_IS_FETCHING_WEATHER_INFORMATION = "SET_IS_FETCHING_WEATHER_INFORMATION";

export const setWeatherInformation = (weatherInformation) => {
    return {
        type: SET_WEATHER_INFORMATION,
        payload: weatherInformation,
    };
};

export const setIsFetchingWeatherInformation = (isFetchingWeatherInformation) => {
    return {
        type: SET_IS_FETCHING_WEATHER_INFORMATION,
        payload: isFetchingWeatherInformation,
    };
};