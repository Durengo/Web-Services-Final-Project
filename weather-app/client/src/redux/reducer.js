import {initialState} from "./initialStates";
import {
    SET_PRECIPITATION_UNIT,
    SET_PRESSURE_UNIT,
    SET_TEMPERATURE_UNIT,
    SET_VISIBILITY_UNIT,
    SET_WIND_SPEED_UNIT
} from "./actions/weatherUnits";
import {SET_CURRENT_LOCATION, SET_IS_FETCHING_LOCATION} from "./actions/currentLocationActions";
import {SET_IS_FETCHING_WEATHER_INFORMATION, SET_WEATHER_INFORMATION} from "./actions/weatherInformationActions";
import {SET_CURRENT_USER, SET_IS_FETCHING_CURRENT_USER} from "./actions/sessionUser";
import {
    SET_IS_UPDATING_SESSION_DATE_TODAY,
    SET_SESSION_DATE_TODAY,
    SET_SESSION_IP,
    SET_SESSION_LOGGED_IN,
    SET_SESSION_USING_IP
} from "./actions/session";
import {SET_FORECAST_HISTORY, SET_IS_FETCHING_FORECAST_HISTORY} from "./actions/forecastHistoryActions";
import {
    SET_IS_FETCHING_MAP_COORDINATES,
    SET_MAP_COORDINATES,
    SET_MAP_COORDINATES_FIRST_TIME, SET_PREVIOUS_MAP_COORDINATES
} from "./actions/mapCoordinatesActions";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: {
                    ...state.currentLocation,
                    ...action.payload,
                },
            };
        case SET_IS_FETCHING_LOCATION:
            return {
                ...state,
                isFetchingCurrentLocation: action.payload,
            };
        case SET_WEATHER_INFORMATION:
            return {
                ...state,
                weatherInformation: {
                    ...state.weatherInformation,
                    ...action.payload,
                },
            };
        case SET_IS_FETCHING_WEATHER_INFORMATION:
            return {
                ...state,
                isFetchingWeatherInformation: action.payload,
            };
        case SET_TEMPERATURE_UNIT:
            return {
                ...state,
                temperatureUnit: action.payload,
            };
        case SET_WIND_SPEED_UNIT:
            return {
                ...state,
                windSpeedUnit: action.payload,
            };
        case SET_VISIBILITY_UNIT:
            return {
                ...state,
                visibilityUnit: action.payload,
            };
        case SET_PRECIPITATION_UNIT:
            return {
                ...state,
                precipitationUnit: action.payload,
            };
        case SET_PRESSURE_UNIT:
            return {
                ...state,
                pressureUnit: action.payload,
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                // currentUser: action.payload,
                currentUser: {
                    ...state.currentUser,
                    ...action.payload,
                }
            };
        case SET_IS_FETCHING_CURRENT_USER:
            return {
                ...state,
                isFetchingCurrentUser: action.payload,
            };
        case SET_SESSION_LOGGED_IN:
            return {
                ...state,
                session: action.payload,
            };
        case SET_SESSION_IP:
            return {
                ...state,
                sessionIp: action.payload,
            };
        case SET_SESSION_DATE_TODAY:
            return {
                ...state,
                sessionDateToday: action.payload,
            };
        case SET_IS_UPDATING_SESSION_DATE_TODAY:
            return {
                ...state,
                isUpdatingSessionDateToday: action.payload,
            };
        case SET_SESSION_USING_IP:
            return {
                ...state,
                sessionUsingIp: action.payload,
            };
        case SET_FORECAST_HISTORY:
            return {
                ...state,
                forecastHistory: {
                    ...state.forecastHistory,
                    ...action.payload,
                },
            };
        case SET_IS_FETCHING_FORECAST_HISTORY:
            return {
                ...state,
                isFetchingForecastHistory: action.payload,
            };
        case SET_MAP_COORDINATES:
            return {
                ...state,
                mapCoordinates: action.payload,
            };
        case SET_PREVIOUS_MAP_COORDINATES:
            return {
                ...state,
                previousMapCoordinates: action.payload,
            };
        case SET_IS_FETCHING_MAP_COORDINATES:
            return {
              ...state,
              isFetchingMapCoordinates: action.payload,
            };
        case SET_MAP_COORDINATES_FIRST_TIME:
            return {
                ...state,
                mapCoordinatesFirstTime: action.payload,
            }
        default:
            return state;
    }
};