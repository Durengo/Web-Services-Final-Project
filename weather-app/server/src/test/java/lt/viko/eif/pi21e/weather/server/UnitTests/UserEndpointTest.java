package lt.viko.eif.pi21e.weather.server.UnitTests;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.restassured.RestAssured;
import io.restassured.parsing.Parser;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.User;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * This class contains JUnit test cases for the user endpoints in the REST API.
 */
public class UserEndpointTest {

    /**
     * The ID values for test users.
     */
    private int id1;
    private int id2;
    private int id3;

    /**
     * Set up method to initialize test data before each test case.
     */
    @BeforeEach
    public void setup() {
        // Create test users
        User user1 = new User("username1", "user1@example.com", "password1");
        User user2 = new User("username2", "user2@example.com", "password2");
        User user3 = new User("username3", "user3@example.com", "password3");

        // Set test users in Interactor (assuming it's a shared resource)
        Interactor.set(user1);
        Interactor.set(user2);
        Interactor.set(user3);

        // Save the IDs of the test users
        id1 = user1.getUserId();
        id2 = user2.getUserId();
        id3 = user3.getUserId();
    }

    /**
     * Test case for creating a new user.
     *
     * @throws JsonProcessingException if there is an error in JSON processing.
     */
    @Test
    public void createUserTest() throws JsonProcessingException {
        // Create a new user
        User newUser = new User("newuser", "newuser@example.com", "newpassword");
        String userJson = JObj2JSON.convert(newUser);

        // Send a POST request to create the user
        Response response = RestAssured.given()
                .contentType("application/json")
                .body(userJson)
                .post("http://localhost:8080/users");

        // Assert that the response status code is 200 (OK)
        assertEquals(200, response.getStatusCode());
    }

    /**
     * Test case for retrieving a user by ID.
     */
    @Test
    public void getUserByIdTest() {
        // Register the JSON parser for the response
        RestAssured.registerParser("text/plain", Parser.JSON);

        // Send a GET request to retrieve the user by ID
        Response response = RestAssured.given()
                .pathParam("id", id1)
                .when()
                .get("http://localhost:8080/users/{id}");

        // Extract the response body and parse it as JSON
        String responseBody = response.getBody().asString();
        JsonPath jsonPath = new JsonPath(responseBody);
        String dataJsonString = jsonPath.getString("data");
        JsonPath dataJsonPath = new JsonPath(dataJsonString);

        // Assert the response status code and the user properties
        assertEquals(200, response.getStatusCode());
        assertEquals("username1", dataJsonPath.getString("username"));
        assertEquals("user1@example.com", dataJsonPath.getString("mail"));
        assertEquals("password1", dataJsonPath.getString("password"));
    }

    /**
     * Test case for retrieving a user by username.
     */
    @Test
    public void getUserByUsernameTest() {
        // Send a GET request to retrieve the user by username
        Response response = RestAssured.given()
                .queryParam("username", "username1")
                .when()
                .get("http://localhost:8080/users/username");

        // Extract the response body and parse it as JSON
        String responseBody = response.getBody().asString();
        JsonPath jsonPath = new JsonPath(responseBody);
        String dataJsonString = jsonPath.getString("data");
        JsonPath dataJsonPath = new JsonPath(dataJsonString);

        // Assert the response status code and the user properties
        assertEquals(200, response.getStatusCode());
        assertEquals("username1", dataJsonPath.getString("username"));
        assertEquals("user1@example.com", dataJsonPath.getString("mail"));
        assertEquals("password1", dataJsonPath.getString("password"));
    }

    /**
     * Test case for retrieving all users.
     */
    @Test
    public void getUsersTest() {
        // Send a GET request to retrieve all users
        Response response = RestAssured.get("http://localhost:8080/users");

        // Extract the response body and parse it as JSON
        String responseBody = response.getBody().asString();
        JsonPath jsonPath = new JsonPath(responseBody);
        String dataJsonString = jsonPath.getString("data");
        JsonPath dataJsonPath = new JsonPath(dataJsonString);

        // Get the lists of usernames and emails from the JSON
        List<String> usernames = dataJsonPath.getList("username");
        List<String> emails = dataJsonPath.getList("mail");

        // Assert the response status code and the presence of usernames and emails
        assertEquals(200, response.getStatusCode());
        assertNotNull(usernames);
        assertNotNull(emails);
        assertTrue(usernames.size() > 0);
        assertTrue(emails.size() > 0);
    }

    /**
     * Test case for updating a user by ID.
     *
     * @throws JsonProcessingException if there is an error in JSON processing.
     */
    @Test
    public void updateUserByIdTest() throws JsonProcessingException {
        // Create an updated user object
        User updatedUser = new User("updateduser1", "updateduser1@example.com", "updatedpassword1");
        String userJson = JObj2JSON.convert(updatedUser);

        // Send a PUT request to update the user by ID
        Response response = RestAssured.given()
                .contentType("application/json")
                .pathParam("id", id2)
                .body(userJson)
                .put("http://localhost:8080/users/{id}");

        // Assert that the response status code is 200 (OK)
        assertEquals(200, response.getStatusCode());
    }

    /**
     * Test case for updating a user by username.
     *
     * @throws JsonProcessingException if there is an error in JSON processing.
     */
    @Test
    public void updateUserByUsernameTest() throws JsonProcessingException {
        // Create an updated user object
        User updatedUser = new User("updateduser2", "updateduser2@example.com", "updatedpassword2");
        String userJson = JObj2JSON.convert(updatedUser);

        // Send a PUT request to update the user by username
        Response response = RestAssured.given()
                .contentType("application/json")
                .queryParam("username", "username1")
                .body(userJson)
                .put("http://localhost:8080/users/username");

        // Assert that the response status code is 200 (OK)
        assertEquals(200, response.getStatusCode());
    }

    /**
     * Test case for deleting a user by ID.
     */
    @Test
    public void deleteUserByIdTest() {
        // Send a DELETE request to delete the user by ID
        Response response = RestAssured.delete("http://localhost:8080/users/" + id3);

        // Assert that the response status code is 200 (OK)
        assertEquals(200, response.getStatusCode());
    }
}