export const convertToFahrenheit = (celsius) => {
    const celsiusInput = parseFloat(celsius);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    const result = `${fahrenheit.toFixed(2)}°F`;
    console.log(result);
    return result;
};