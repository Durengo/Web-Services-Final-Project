package lt.viko.eif.pi21e.weather.server;

import lt.viko.eif.pi21e.weather.server.ActiveMQ.MessageSender;
import lt.viko.eif.pi21e.weather.server.checker.CheckerClass;
import lt.viko.eif.pi21e.weather.server.events.EventInfo;
import lt.viko.eif.pi21e.weather.server.events.EventPublisher;
import lt.viko.eif.pi21e.weather.server.timer.HourlyTask;
import lt.viko.eif.pi21e.weather.server.timer.SchedulerInit;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.jms.JMSException;

/**
 * This is the main class for the Weather Application Server.
 * It uses Spring Boot and Swagger for automatic API documentation generation.
 */
@SpringBootApplication
@EnableSwagger2
public class WeatherApplicationServer {
    /**
     * The main method which serves as the entry point for the Spring Boot application.
     * @param args command-line arguments
     */
    public static void main(String... args)
    {
        SpringApplication.run(WeatherApplicationServer.class, args);
    }
}
