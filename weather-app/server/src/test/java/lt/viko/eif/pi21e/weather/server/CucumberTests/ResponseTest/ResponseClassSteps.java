package lt.viko.eif.pi21e.weather.server.CucumberTests.ResponseTest;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lt.viko.eif.pi21e.weather.server.responses.ResponseClass;
import org.junit.Assert;

/**
 This class represents the steps for testing the ResponseClass.
 */
public class ResponseClassSteps {
    private int statusCode;
    private String message;
    private String data;
    private ResponseClass response;

    /**
     Sets the status code for the test scenario.
     @param statusCode The status code to set.
     */
    @Given("the status code is {int}")
    public void theStatusCodeIs(int statusCode) {
        this.statusCode = statusCode;
    }

    /**
     Sets the message for the test scenario.
     @param message The message to set.
     */
    @Given("the message is {string}")
    public void theMessageIs(String message) {
        this.message = message;
    }

    /**
     Sets the data for the test scenario.
     @param data The data to set.
     */
    @Given("the data is {string}")
    public void theDataIs(String data) {
        this.data = data;
    }

    /**
     Creates an instance of ResponseClass with the provided status code, message, and data.
     */
    @When("a ResponseClass instance is created")
    public void aResponseClassInstanceIsCreated() {
        response = new ResponseClass(statusCode, message, data);
    }

    /**
     Verifies that the status code of the response matches the expected status code.
     @param expectedStatusCode The expected status code.
     */
    @Then("the status code should be {int}")
    public void theStatusCodeShouldBe(int expectedStatusCode) {
        Assert.assertEquals(expectedStatusCode, response.getStatus());
    }

    /**
     Verifies that the message of the response matches the expected message.
     @param expectedMessage The expected message.
     */
    @Then("the message should be {string}")
    public void theMessageShouldBe(String expectedMessage) {
        Assert.assertEquals(expectedMessage, response.getMessage());
    }

    /**
     Verifies that the data of the response matches the expected data.
     @param expectedData The expected data.
     */
    @Then("the data should be {string}")
    public void theDataShouldBe(String expectedData) {
        Assert.assertEquals(expectedData, response.getData());
    }
}