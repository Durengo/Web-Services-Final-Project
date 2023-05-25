package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherApiEndpoint {
    @GetMapping("/weather?coordinates={lat},{lon}")
    public String getWeatherCoordinates(@PathVariable float lat, @PathVariable float lon) {
        return "Hello from weather API";
    }

    @GetMapping("/weather?city={city}")
    public String getWeatherCity(@PathVariable String city) {
        return "Hello from weather API";
    }

}
