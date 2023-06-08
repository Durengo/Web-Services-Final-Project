package lt.viko.eif.pi21e.weather.server.UnitTests;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.models.*;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

/**

 This class contains unit tests for the JObj2JSON utility class.
 */
public class JObj2JSONTest {
    /**
     Test case for converting an object to JSON.
     @throws JsonProcessingException if an error occurs during JSON processing
     */
    @Test
    public void testConvertObjectToJson() throws JsonProcessingException {
        // Create a User object
        User user = new User("john123", "john@example.com", "password");
        user.setUserId(1);

        // Create a favorite address and associate it with the user
        List<FavoriteAddress> favoriteAddresses = new ArrayList<>();
        FavoriteAddress favoriteAddress = new FavoriteAddress();
        favoriteAddress.setAddress("123 Street");
        favoriteAddresses.add(favoriteAddress);
        favoriteAddress.setUser(user);
        user.setFavoriteAddresses(favoriteAddresses);

        // Create a subscription address and associate it with the user
        List<SubscriptionAddress> subscriptionAddresses = new ArrayList<>();
        SubscriptionAddress subscriptionAddress = new SubscriptionAddress();
        subscriptionAddress.setAddress("456 Avenue");
        subscriptionAddresses.add(subscriptionAddress);
        subscriptionAddress.setUser(user);
        user.setSubscriptionAddresses(subscriptionAddresses);

        // Convert the User object to JSON
        String json = JObj2JSON.convert(user);

        // Define the expected JSON string
        String expectedJson = """
                {
                  "userId" : 1,
                  "username" : "john123",
                  "mail" : "john@example.com",
                  "password" : "password",
                  "favoriteAddresses" : [ {
                    "favoriteAddressId" : 0,
                    "address" : "123 Street",
                    "type" : null
                  } ],
                  "subscriptionAddresses" : [ {
                    "subscriptionAddressId" : 0,
                    "address" : "456 Avenue",
                    "criteriaWeathers" : [ ]
                  } ]
                }""";

        // Normalize the JSON strings by removing whitespace characters
        expectedJson = expectedJson.replaceAll("\\s", "");
        json = json.replaceAll("\\s", "");

        // Compare the expected JSON with the actual JSON
        Assert.assertEquals(expectedJson, json);
    }

    /**
     Test case for converting JSON to an object.
     @throws JsonProcessingException if an error occurs during JSON processing
     */
    @Test
    public void testConvertJsonToObject() throws JsonProcessingException {
        // Define a JSON string representing a User object
        String json = "{\"userId\":1,\"username\":\"john123\",\"mail\":\"john@example.com\",\"password\":\"password\",\"favoriteAddresses\":[{\"favoriteAddressId\":0,\"address\":\"123 Street\",\"user\":{\"userId\":1,\"username\":\"john123\",\"mail\":\"john@example.com\",\"password\":\"password\",\"favoriteAddresses\":[{\"favoriteAddressId\":0,\"address\":\"123 Street\",\"user\":null,\"type\":null}],\"subscriptionAddresses\":[{\"subscriptionAddressId\":0,\"address\":\"456 Avenue\",\"user\":null,\"criteriaWeathers\":[]}]},\"type\":null}],\"subscriptionAddresses\":[{\"subscriptionAddressId\":0,\"address\":\"456 Avenue\",\"user\":{\"userId\":1,\"username\":\"john123\",\"mail\":\"john@example.com\",\"password\":\"password\",\"favoriteAddresses\":[{\"favoriteAddressId\":0,\"address\":\"123 Street\",\"user\":null,\"type\":null}],\"subscriptionAddresses\":[{\"subscriptionAddressId\":0,\"address\":\"456 Avenue\",\"user\":null,\"criteriaWeathers\":[]}]},\"criteriaWeathers\":[]}]}";

        // Convert the JSON to a User object
        User user = JObj2JSON.convert(json, User.class);

        // Verify the attributes of the User object
        Assert.assertEquals(1, user.getUserId());
        Assert.assertEquals("john123", user.getUsername());
        Assert.assertEquals("john@example.com", user.getMail());
        Assert.assertEquals("password", user.getPassword());

        // Verify the favorite addresses of the User object
        List<FavoriteAddress> favoriteAddresses = user.getFavoriteAddresses();
        Assert.assertEquals(1, favoriteAddresses.size());
        FavoriteAddress favoriteAddress = favoriteAddresses.get(0);
        Assert.assertEquals("123 Street", favoriteAddress.getAddress());
        Assert.assertEquals(user, favoriteAddress.getUser());

        // Verify the subscription addresses of the User object
        List<SubscriptionAddress> subscriptionAddresses = user.getSubscriptionAddresses();
        Assert.assertEquals(1, subscriptionAddresses.size());
        SubscriptionAddress subscriptionAddress = subscriptionAddresses.get(0);
        Assert.assertEquals("456 Avenue", subscriptionAddress.getAddress());
        Assert.assertEquals(user, subscriptionAddress.getUser());
    }
}

