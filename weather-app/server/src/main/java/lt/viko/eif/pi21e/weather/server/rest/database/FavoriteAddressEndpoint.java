package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/favorites")
public class FavoriteAddressEndpoint {

    @PostMapping
    public String createFavoriteAddress(@RequestBody String favoriteAddress) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.createFavoriteAddress(favoriteAddress);
    }

    @GetMapping(value = "/{id}")
    public String getFavoriteAddress(@PathVariable int id) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.getFavoriteAddress(id);
    }

    @GetMapping
    public String getFavoriteAddresses() {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.getFavoriteAddresses();
    }

    // Here is no update method because the FavoriteAddressClient class does not have any update methods

    @DeleteMapping(value = "/{id}")
    public String deleteFavoriteAddress(@PathVariable int id) {
        FavoriteAddressClient client = new FavoriteAddressClient();
        return client.deleteFavoriteAddress(id);
    }
}
