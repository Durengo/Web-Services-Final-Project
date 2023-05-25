package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import org.springframework.web.bind.annotation.*;

/**
 * Represents WeatherApiEndpoint object that is responsible
 * for handling requests and responses
 */

@RestController
public class WeatherApiEndpoint {
    /**
     * Handles GET request to /weather endpoint
     * @param lat latitude
     * @param lon longitude
     * @return String
     */
    @GetMapping(value = "/weather")
    public String getWeatherCoordinates(@RequestParam(defaultValue = "0.0") float lat,
                                        @RequestParam(defaultValue = "0.0") float lon) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getCurrentWeatherData(lat, lon);
    }

    /**
     * Handles GET request to /weather/{city} endpoint
     * @param city city name
     * @return String
     */
    @GetMapping(value = "/weather/{city}")
    public String getWeatherCity(@PathVariable String city) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getCurrentWeatherData(city);
    }

    /**
     * Handles GET request to /weather/forecast endpoint
     * @param lat latitude
     * @param lon longitude
     * @param days number of days
     * @return String
     */
    @GetMapping(value = "/weather/forecast")
    public String getWeatherCoordinatesForecast(@RequestParam(defaultValue = "0.0") float lat,
                                                @RequestParam(defaultValue = "0.0") float lon,
                                                @RequestParam(defaultValue = "1") int days) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getForecastWeatherData(lat, lon, days);
    }

    /**
     * Handles GET request to /weather/forecast/{city} endpoint
     * @param city city name
     * @param days number of days
     * @return String
     */
    @GetMapping(value = "/weather/forecast/city/{city}")
    public String getWeatherCityForecast(@PathVariable String city,
                                         @RequestParam(defaultValue = "1") int days) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getForecastWeatherData(city, days);
    }
}
