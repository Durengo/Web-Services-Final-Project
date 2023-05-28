package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

/**
 * This class is responsible for handling requests to /criteria endpoint
 */
@RestController
@RequestMapping("/criteria")
public class CriteriaWeatherEndpoint {

    /**
     * This method is responsible for handling POST request to /criteria endpoint
     * @param criteriaWeather request body
     * @return response string in json format
     */
    @PostMapping
    public String createCriteriaWeather(@RequestBody String criteriaWeather) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.createCriteriaWeather(criteriaWeather);
    }

    /**
     * This method is responsible for handling GET request to /criteria/{id} endpoint
     * @param id criteria id
     * @return response string in json format
     */
    @GetMapping(value = "/{id}")
    public String getCriteriaWeather(@PathVariable int id) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.getCriteriaWeather(id);
    }

    /**
     * This method is responsible for handling GET request to /criteria endpoint
     * @return response string in json format
     */
    @GetMapping
    public String getCriteriaWeathers() {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.getCriteriaWeathers();
    }

    /**
     * This method is responsible for handling PUT request to /criteria/{id} endpoint
     * @param criteriaWeather request body
     * @param id criteria id
     * @return response string in json format
     */
    @PutMapping(value = "/{id}")
    public String updateCriteriaWeather(@RequestBody String criteriaWeather, @PathVariable int id) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.updateCriteriaWeather(id, criteriaWeather);
    }

    /**
     * This method is responsible for handling DELETE request to /criteria/{id} endpoint
     * @param id criteria id
     * @return response string in json format
     */
    @DeleteMapping(value = "/{id}")
    public String deleteCriteriaWeather(@PathVariable int id) {
        CriteriaWeatherClient client = new CriteriaWeatherClient();
        return client.deleteCriteriaWeather(id);
    }
}
