import SunCalc from "suncalc";
export const convertToFahrenheit = (celsius) => {
    const celsiusInput = parseFloat(celsius);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    const result = `${fahrenheit.toFixed(2)}°F`;
    console.log(result);
    return result;
};

export const getSunriseAndSunset = (latitude, longitude) => {
    const times = SunCalc.getTimes(new Date(), latitude, longitude);
    const sunrise = times.sunrise.getHours() + ":" + times.sunrise.getMinutes();
    const sunset = times.sunset.getHours() + ":" + times.sunset.getMinutes();

    return {
        sunrise,
        sunset
    };
};