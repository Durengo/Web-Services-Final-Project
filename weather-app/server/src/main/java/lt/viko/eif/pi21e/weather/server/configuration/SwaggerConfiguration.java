package lt.viko.eif.pi21e.weather.server.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
/**
 * This class provides configuration for Swagger.
 * Swagger is used to build interactive API documentation.
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    /**
     * Builds and returns a new Docket which is the primary interface of the Swagger framework.
     *
     * @return a new Docket object
     */
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("lt.viko.eif.pi21e"))
                .paths(PathSelectors.any())
                .build();
    }
}