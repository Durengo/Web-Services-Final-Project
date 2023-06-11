package lt.viko.eif.pi21e.weather.server.CucumberTests.HourlyTaskTest;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lt.viko.eif.pi21e.weather.server.timer.HourlyTask;
import lt.viko.eif.pi21e.weather.server.timer.SchedulerInit;
import org.mockito.Mockito;

/**
 This class represents the steps for the HourlyTask feature in the system.
 It contains methods for initializing the SchedulerInit class, calling the init() method,
 and verifying that the HourlyTask is started.
 */
public class HourlyTaskSteps {

    private SchedulerInit schedulerInit;
    private HourlyTask hourlyTask;

    /**
     Initializes the SchedulerInit class by creating a mock HourlyTask object
     and instantiating the SchedulerInit class with it.
     */
    @Given("the SchedulerInit class is initialized")
    public void initializeSchedulerInit() {
        hourlyTask = Mockito.mock(HourlyTask.class);
        schedulerInit = new SchedulerInit(hourlyTask);
    }

    /**
     Calls the init() method of the SchedulerInit class.
     */
    @When("the init\\(\\) method is called")
    public void callInitMethod() {
        schedulerInit.init();
    }

    /**
     Verifies that the HourlyTask's start() method is called using Mockito.verify().
     */
    @Then("the HourlyTask should be started")
    public void verifyHourlyTaskStarted() {
        Mockito.verify(hourlyTask).start();
    }
}
