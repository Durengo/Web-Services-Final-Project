package lt.viko.eif.pi21e.weather.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
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
