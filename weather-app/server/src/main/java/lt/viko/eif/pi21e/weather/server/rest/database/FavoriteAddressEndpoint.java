package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

/**
 * This class is responsible for handling requests to /favorites endpoint
 */
@RestController
@RequestMapping("/favorites")
public class FavoriteAddressEndpoint {

    /**
     * This method is responsible for handling POST request to /favorites endpoint
     * @param favoriteAddress request body
     * @return response string in json format
     */
    @PostMapping
    public String createFavoriteAddress(@RequestBody String favoriteAddress) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.createFavoriteAddress(favoriteAddress);
    }

    /**
     * This method is responsible for handling GET request to /favorites/{id} endpoint
     * @param id favorite id
     * @return response string in json format
     */
    @GetMapping(value = "/{id}")
    public String getFavoriteAddress(@PathVariable int id) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.getFavoriteAddress(id);
    }

    /**
     * This method is responsible for handling GET request to /favorites endpoint
     * @return response string in json format
     */
    @GetMapping
    public String getFavoriteAddresses() {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.getFavoriteAddresses();
    }

    /**
     * This method is responsible for handling PUT request to /favorites/{id} endpoint
     * @param favoriteAddress request body
     * @param id favorite id
     * @return response string in json format
     */
    @PutMapping(value = "/{id}")
    public String updateFavoriteAddress(@RequestBody String favoriteAddress, @PathVariable int id) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.updateFavoriteAddress(id, favoriteAddress);
    }

    /**
     * This method is responsible for handling DELETE request to /favorites/{id} endpoint
     * @param id favorite id
     * @return response string in json format
     */
    @DeleteMapping(value = "/{id}")
    public String deleteFavoriteAddress(@PathVariable int id) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.deleteFavoriteAddress(id);
    }
}
