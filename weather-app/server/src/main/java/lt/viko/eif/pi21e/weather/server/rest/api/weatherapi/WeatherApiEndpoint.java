package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherApiEndpoint {
    @GetMapping("/weather?coordinates={lat},{lon}")
    public String getWeatherCoordinates(@PathVariable float lat, @PathVariable float lon) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getCurrentWeatherData(lat, lon);
    }

    @GetMapping("/weather?city={city}")
    public String getWeatherCity(@PathVariable String city) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getCurrentWeatherData(city);
    }

    @GetMapping("/weather?coordinates={lat},{lon}&forecast={days}")
    public String getWeatherCoordinatesForecast(@PathVariable float lat, @PathVariable float lon, @PathVariable int days) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getForecastWeatherData(lat, lon, days);
    }

    @GetMapping("/weather?city={city}&forecast={days}")
    public String getWeatherCityForecast(@PathVariable String city, @PathVariable int days) {
        WeatherAPIClient client = new WeatherAPIClient();
        return client.getForecastWeatherData(city, days);
    }

}
