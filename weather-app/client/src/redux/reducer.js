import {initialState} from "./initialStates";
import {SET_PRESSURE_UNIT, SET_VISIBILITY_UNIT, SET_WIND_SPEED_UNIT} from "./actions/weatherUnits";
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
        case "SET_TEMPERATURE_UNIT":
            return {
                ...state,
                temperatureUnit: action.payload,
            };
        case "SET_WIND_SPEED_UNIT":
            return {
                ...state,
                windSpeedUnit: action.payload,
            };
        case "SET_VISIBILITY_UNIT":
            return {
                ...state,
                visibilityUnit: action.payload,
            };
        case "SET_PRECIPITATION_UNIT":
            return {
                ...state,
                precipitationUnit: action.payload,
            };
        case "SET_PRESSURE_UNIT":
            return {
                ...state,
                pressureUnit: action.payload,
            };
        default:
            return state;
    }
};