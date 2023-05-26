package lt.viko.eif.pi21e.weather.server.rest.api.geolocationapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Represents GeoLocationApiEndpoint object that is responsible
 * for handling requests and responses
 */
@RestController
public class GeoLocationApiEndpoint {
    /**
     * Handles GET request to /ip endpoint
     * @param ip ip address
     * @return String
     */
    @GetMapping(value = "/ipinfo")
    String getIpInfo(@RequestParam(defaultValue = "0.0.0.0") String ip) {
        GeoLocationApiClient client = new GeoLocationApiClient();
        return client.getIpInfo(ip);
    }
}
