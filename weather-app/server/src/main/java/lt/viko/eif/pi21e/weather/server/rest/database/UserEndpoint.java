package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;
/**
 * This class serves as the REST endpoint for all user-related operations.
 * It communicates with the UserClient to perform the operations.
 */
@RestController
@RequestMapping("/users")
public class UserEndpoint {
    /**
     * Creates a new user.
     *
     * @param user the new user to be created, given as a JSON string.
     * @return the result of the user creation operation.
     */
    @PostMapping
    public String createUser(@RequestBody String user) {
        UserClient client = new UserClient();
        return client.createUser(user);
    }
    /**
     * Retrieves a user with a specific ID.
     *
     * @param id the ID of the user to retrieve.
     * @return the user with the specified ID.
     */
    @GetMapping(value = "/{id}")
    public String getUser(@PathVariable int id) {
        UserClient client = new UserClient();
        return client.getUser(id);
    }
    /**
     * This method retrieves the details of a user by their username.
     *
     * @param username - Username of the user
     * @return String - JSON representation of the user object
     */
    @GetMapping(value = "/username")
    public String getUser(@RequestParam String username) {
        UserClient client = new UserClient();
        return client.getUser(username);
    }
    /**
     * This method retrieves all users in the system.
     *
     * @return String - JSON representation of the list of users
     */
    @GetMapping
    public String getUsers() {
        UserClient client = new UserClient();
        return client.getUsers();
    }
    /**
     * This method updates the details of a user by their id.
     *
     * @param id - User id
     * @param user - JSON string representing the updated User object
     * @return String - Result of the user update operation
     */
    @PutMapping(value = "/{id}")
    public String updateUser(@PathVariable int id, @RequestBody String user) {
        UserClient client = new UserClient();
        return client.updateUser(id, user);
    }
    /**
     * This method updates the details of a user by their username.
     *
     * @param username - Username of the user
     * @param user - JSON string representing the updated User object
     * @return String - Result of the user update operation
     */
    @PutMapping(value = "/username")
    public String updateUser(@RequestParam String username, @RequestBody String user) {
        UserClient client = new UserClient();
        return client.updateUser(username, user);
    }
    /**
     * This method deletes a user by their id.
     *
     * @param id - User id
     * @return String - Result of the user deletion operation
     */
    @DeleteMapping(value = "/{id}")
    public String deleteUser(@PathVariable int id) {
        UserClient client = new UserClient();
        return client.deleteUser(id);
    }
    /**
     * This method deletes a user by their username.
     *
     * @param username - Username of the user
     * @return String - Result of the user deletion operation
     */
    @DeleteMapping(value = "/username")
    public String deleteUser(@RequestParam String username) {
        UserClient client = new UserClient();
        return client.deleteUser(username);
    }
    /**
     * This method adds a new subscription address for a user.
     *
     * @param id - User id
     * @param subscriptionAddressJson - JSON string representing the SubscriptionAddress object to be added
     * @return String - Result of the subscription address addition operation
     */
    @PostMapping(value = "/{id}/subscriptions")
    public String addSubscriptionAddress(@PathVariable int id, @RequestBody String subscriptionAddressJson) {
        UserClient client = new UserClient();
        return client.addSubscriptionAddress(id, subscriptionAddressJson);
    }
    /**
     * This method adds a new favorite address for a user.
     *
     * @param id - User id
     * @param favoriteAddressJson - JSON string representing the FavoriteAddress object to be added
     * @return String - Result of the favorite address addition operation
     */
    @PostMapping(value = "/{id}/favorites")
    public String addFavoriteAddress(@PathVariable int id, @RequestBody String favoriteAddressJson) {
        UserClient client = new UserClient();
        return client.addFavoriteAddress(id, favoriteAddressJson);
    }
    /**
     * This method deletes a subscription address for a user.
     *
     * @param userId - User id
     * @param subscriptionAddressId - Id of the SubscriptionAddress to be deleted
     * @return String - Result of the subscription address deletion operation
     */
    @DeleteMapping(value = "/{userId}/subscriptions/{subscriptionAddressId}")
    public String deleteSubscriptionAddress(@PathVariable int userId, @PathVariable int subscriptionAddressId) {
        UserClient client = new UserClient();
        return client.deleteSubscriptionAddress(userId, subscriptionAddressId);
    }
    /**
     * This method deletes a favorite address for a user.
     *
     * @param userId - User id
     * @param favoriteAddressId - Id of the FavoriteAddress to be deleted
     * @return String - Result of the favorite address deletion operation
     */
    @DeleteMapping(value = "/{userId}/favorites/{favoriteAddressId}")
    public String deleteFavoriteAddress(@PathVariable int userId, @PathVariable int favoriteAddressId) {
        UserClient client = new UserClient();
        return client.deleteFavoriteAddress(userId, favoriteAddressId);
    }

}
