package lt.viko.eif.pi21e.weather.server.rest.api.geolocationapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeoLocationApiEndpoint {
    @GetMapping(value = "/ip")
    String getIp(@RequestParam(defaultValue = "0.0.0.0") String value) {
        GeoLocationApiClient client = new GeoLocationApiClient();
        return client.getIp(value);
    }
}
