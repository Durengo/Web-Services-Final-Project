package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionAddressEndpoint {

    @PostMapping
    public String createSubscriptionAddress(@RequestBody String subscriptionAddress) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.createSubscriptionAddress(subscriptionAddress);
    }

    @GetMapping(value = "/{id}")
    public String getSubscriptionAddress(@PathVariable int id) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.getSubscriptionAddress(id);
    }

    @GetMapping
    public String getSubscriptionAddresses() {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.getSubscriptionAddresses();
    }

    @PutMapping(value = "/{id}")
    public String updateSubscriptionAddress(@RequestBody String subscriptionAddress, @PathVariable int id) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.updateSubscriptionAddress(id, subscriptionAddress);
    }

    @DeleteMapping(value = "/{id}")
    public String deleteSubscriptionAddress(@PathVariable int id) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.deleteSubscriptionAddress(id);
    }

    @DeleteMapping(value = "/{subId}/criteriaWeather/{criteriaWeatherId}")
    public String deleteCriteriaWeather(@PathVariable int subId, @PathVariable int criteriaWeatherId) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.deleteCriteriaWeather(subId, criteriaWeatherId);
    }

    @PostMapping(value = "/subscriptionAddress/{subId}/criteriaWeather")
    public String addCriteriaWeather(@PathVariable int subId, @RequestBody String criteriaWeatherJson) {
        SubscriptionAddressClient client = new SubscriptionAddressClient();
        return client.addCriteriaWeather(subId, criteriaWeatherJson);
    }

}
