package lt.viko.eif.pi21e.weather.server.CucumberTests.HourlyTaskTest;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features/response.feature",
        glue = "lt.viko.eif.pi21e.weather.server.CucumberTests.ResponseTest",
        plugin = {"pretty", "html:target/cucumber-reports"}
)
public class CucumberRunner {
}