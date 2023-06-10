import {initialState} from "./initialStates";
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: action.payload,
            };
        case "SET_CURRENT_LOCATION":
            return {
                ...state,
                currentLocation: {
                    ...state.currentLocation,
                    ...action.payload,
                },
            };
        case "SET_IS_FETCHING_CURRENT_LOCATION":
            return {
                ...state,
                isFetchingCurrentLocation: action.payload,
            };
        case "SET_WEATHER_INFORMATION":
            return {
                ...state,
                weatherInformation: {
                    ...state.weatherInformation,
                    ...action.payload,
                },
            };
        case "SET_IS_FETCHING_WEATHER_INFORMATION":
            return {
                ...state,
                isFetchingWeatherInformation: action.payload,
            };
        default:
            return state;
    }
};