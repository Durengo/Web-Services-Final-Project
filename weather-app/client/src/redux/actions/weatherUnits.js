export const SET_TEMPERATURE_UNIT = "SET_TEMPERATURE_UNIT";

export const setTemperatureUnit = (temperatureUnit) => {
    return {
        type: SET_TEMPERATURE_UNIT,
        payload: temperatureUnit,
    };
};
