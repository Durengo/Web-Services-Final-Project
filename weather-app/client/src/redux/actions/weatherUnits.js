export const SET_TEMPERATURE_UNIT = "SET_TEMPERATURE_UNIT";
export const SET_WIND_SPEED_UNIT = "SET_WIND_SPEED_UNIT";
export const SET_VISIBILITY_UNIT = "SET_VISIBILITY_UNIT";
export const SET_PRECIPITATION_UNIT = "SET_PRECIPITATION_UNIT";
export const SET_PRESSURE_UNIT = "SET_PRESSURE_UNIT";

export const setTemperatureUnit = (temperatureUnit) => {
    return {
        type: SET_TEMPERATURE_UNIT,
        payload: temperatureUnit,
    };
};

export const setWindSpeedUnit = (windSpeedUnit) => {
    return {
        type: SET_WIND_SPEED_UNIT,
        payload: windSpeedUnit,
    };
};

export const setVisibilityUnit = (visibilityUnit) => {
    return {
        type: SET_VISIBILITY_UNIT,
        payload: visibilityUnit,
    };
};

export const setPrecipitationUnit = (precipitationUnit) => {
    return {
        type: SET_PRECIPITATION_UNIT,
        payload: precipitationUnit,
    };
};

export const setPressureUnit = (pressureUnit) => {
    return {
        type: SET_PRESSURE_UNIT,
        payload: pressureUnit,
    };
};
