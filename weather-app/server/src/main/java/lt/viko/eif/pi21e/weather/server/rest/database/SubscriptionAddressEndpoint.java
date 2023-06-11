package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

/**
 * This class is responsible for handling requests to /subscriptions endpoint
 */
@RestController
@RequestMapping("/subscriptions")
public class SubscriptionAddressEndpoint {

    /**
     * This method is responsible for handling POST request to /subscriptions endpoint
     * @param subscriptionAddress request body
     * @return response string in json format
     */
    @PostMapping
    public String createSubscriptionAddress(@RequestBody String subscriptionAddress) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.createSubscriptionAddress(subscriptionAddress);
    }

    /**
     * This method is responsible for handling GET request to /subscriptions/{id} endpoint
     * @param id subscription id
     * @return response string in json format
     */
    @GetMapping(value = "/{id}")
    public String getSubscriptionAddress(@PathVariable int id) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.getSubscriptionAddress(id);
    }

    /**
     * This method is responsible for handling GET request to /subscriptions endpoint
     * @return response string in json format
     */
    @GetMapping
    public String getSubscriptionAddresses() {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.getSubscriptionAddresses();
    }

    /**
     * This method is responsible for handling PUT request to /subscriptions/{id} endpoint
     * @param subscriptionAddress request body
     * @param id subscription id
     * @return response string in json format
     */
    @PutMapping(value = "/{id}")
    public String updateSubscriptionAddress(@RequestBody String subscriptionAddress, @PathVariable int id) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.updateSubscriptionAddress(id, subscriptionAddress);
    }

    /**
     * This method is responsible for handling DELETE request to /subscriptions/{id} endpoint
     * @param id subscription id
     * @return response string in json format
     */
    @DeleteMapping(value = "/{id}")
    public String deleteSubscriptionAddress(@PathVariable int id) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.deleteSubscriptionAddress(id);
    }

    /**
     * This method is responsible for handling DELETE request to /subscriptions/{subId}/{criteriaWeatherId} endpoint
     * @param subId subscription id
     * @param criteriaWeatherId criteriaWeather id
     * @return response string in json format
     */
    @DeleteMapping(value = "/{subId}/{criteriaWeatherId}")
    public String deleteCriteriaWeather(@PathVariable int subId, @PathVariable int criteriaWeatherId) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.deleteCriteriaWeather(subId, criteriaWeatherId);
    }

    /**
     * This method is responsible for handling POST request to /subscriptions/{subId} endpoint
     * @param subId subscription id
     * @param criteriaWeatherJson request body
     * @return response string in json format
     */
    @PostMapping(value = "/{subId}")
    public String addCriteriaWeather(@PathVariable int subId, @RequestBody String criteriaWeatherJson) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.addCriteriaWeather(subId, criteriaWeatherJson);
    }

    /**
     * This method is responsible for handling PUT request to /subscriptions/{subId}/{criteriaId} endpoint
     * @param subId
     * @param criteriaId
     * @return
     */
    @PutMapping(value = "/{subId}/{criteriaId}")
    public String addCriteriaWeatherById(@PathVariable int subId, @PathVariable int criteriaId){
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.addCriteriaWeather(subId, criteriaId);
    }

}
