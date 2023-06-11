export const SET_FORECAST_HISTORY = "SET_FORECAST_HISTORY";
export const SET_IS_FETCHING_FORECAST_HISTORY = "SET_IS_FETCHING_FORECAST_HISTORY";

export const setForecastHistory = (forecastHistory) => {
    return {
        type: SET_FORECAST_HISTORY,
        payload: forecastHistory,
    };
};

export const setIsFetchingForecastHistory = (isFetchingCurrentForecastHistory) => {
    return {
        type: SET_IS_FETCHING_FORECAST_HISTORY,
        payload: isFetchingCurrentForecastHistory,
    };
};