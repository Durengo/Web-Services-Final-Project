package lt.viko.eif.pi21e.weather.server.UnitTests;

import lt.viko.eif.pi21e.weather.server.rest.database.UserClient;
import org.junit.Assert;
import org.junit.Test;

/**
 This class contains unit tests for the UserClient class.
 */
public class UserClientTest {

    /**
     Test case for getting a user by ID.
     */
    @Test
    public void testGetUserById() {
        UserClient userClient = new UserClient();

        String response = userClient.getUser(1);

        Assert.assertNotNull(response);
    }

    /**
     Test case for getting a user by username.
     */
    @Test
    public void testGetUserByUsername() {
        UserClient userClient = new UserClient();

        String response = userClient.getUser("username");

        Assert.assertNotNull(response);
    }

    /**
     Test case for getting all users.
     */
    @Test
    public void testGetUsers() {
        UserClient userClient = new UserClient();

        String response = userClient.getUsers();

        Assert.assertNotNull(response);
    }

    /**
     Test case for creating a new user.
     */
    @Test
    public void testCreateUser() {
        UserClient userClient = new UserClient();

        String userJson = "{\"username\": \"testuser\", \"password\": \"password\", \"mail\": \"testuser@example.com\"}";

        String response = userClient.createUser(userJson);

        Assert.assertNotNull(response);
    }

    /**
     Test case for updating a user by ID.
     */
    @Test
    public void testUpdateUserById() {
        UserClient userClient = new UserClient();

        int id = 1;
        String userJson = "{\"username\": \"updateduser\", \"password\": \"newpassword\", \"mail\": \"updateduser@example.com\"}";

        String response = userClient.updateUser(id, userJson);

        Assert.assertNotNull(response);
    }

    /**
     Test case for updating a user by username.
     */
    @Test
    public void testUpdateUserByUsername() {
        UserClient userClient = new UserClient();

        String username = "username";
        String userJson = "{\"username\": \"updateduser\", \"password\": \"newpassword\", \"mail\": \"updateduser@example.com\"}";

        String response = userClient.updateUser(username, userJson);

        Assert.assertNotNull(response);
    }

    /**
     Test case for deleting a user by ID.
     */
    @Test
    public void testDeleteUserById() {
        UserClient userClient = new UserClient();

        int id = 1;

        String response = userClient.deleteUser(id);

        Assert.assertNotNull(response);
    }

    /**
     Test case for deleting a user by username.
     */
    @Test
    public void testDeleteUserByUsername() {
        UserClient userClient = new UserClient();

        String username = "username";

        String response = userClient.deleteUser(username);

        Assert.assertNotNull(response);
    }

    /**
     Test case for adding a subscription address for a user.
     */
    @Test
    public void testAddSubscriptionAddress() {
        UserClient userClient = new UserClient();

        int userId = 1;
        String subscriptionJson = "{\"address\": \"123 Street\", \"city\": \"City\", \"country\": \"Country\"}";

        String response = userClient.addSubscriptionAddress(userId, subscriptionJson);

        Assert.assertNotNull(response);
    }

    /**
     Test case for adding a favorite address for a user.
     */
    @Test
    public void testAddFavoriteAddress() {
        UserClient userClient = new UserClient();

        int userId = 1;
        String favoriteAddressJson = "{\"type\": \"Home\", \"address\": \"123 Street\", \"city\": \"City\", \"country\": \"Country\"}";

        String response = userClient.addFavoriteAddress(userId, favoriteAddressJson);

        Assert.assertNotNull(response);
    }

    /**
     Test case for deleting a subscription address for a user.
     */
    @Test
    public void testDeleteSubscriptionAddress() {
        UserClient userClient = new UserClient();

        int userId = 1;
        int subscriptionAddressId = 1;

        String response = userClient.deleteSubscriptionAddress(userId, subscriptionAddressId);

        Assert.assertNotNull(response);
    }

    /**
     Test case for deleting a favorite address for a user.
     */
    @Test
    public void testDeleteFavoriteAddress() {
        UserClient userClient = new UserClient();

        int userId = 1;
        int favoriteAddressId = 1;

        String response = userClient.deleteFavoriteAddress(userId, favoriteAddressId);

        Assert.assertNotNull(response);
    }
}
