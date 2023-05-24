package lt.viko.eif.pi21e.weather.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class WeatherApplicationServer {
    public static void main(String... args)
    {
        SpringApplication.run(WeatherApplicationServer.class, args);
    }
}
