package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/criteria")
public class CriteriaWeatherEndpoint {

    @PostMapping
    public String createCriteriaWeather(@RequestBody String criteriaWeather) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.createCriteriaWeather(criteriaWeather);
    }

    @GetMapping(value = "/{id}")
    public String getCriteriaWeather(@PathVariable int id) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.getCriteriaWeather(id);
    }

    @GetMapping
    public String getCriteriaWeathers() {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.getCriteriaWeathers();
    }

    @DeleteMapping(value = "/{id}")
    public String deleteCriteriaWeather(@PathVariable int id) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.deleteCriteriaWeather(id);
    }
}
