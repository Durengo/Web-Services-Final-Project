package lt.viko.eif.pi21e.weather.server.configuration;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.context.WebServerApplicationContext;
import org.springframework.stereotype.Component;
/**
 * This class logs the URL of Swagger UI when the server is started.
 */
@Component
public class ServerInformation {
    /**
     * Logger for this class.
     */
    private static final Logger logger = LoggerFactory.getLogger(ServerInformation.class);
    /**
     * Web server context.
     */
    private WebServerApplicationContext context;
    /**
     * Constructor with context as the parameter.
     *
     * @param context the web server application context.
     */
    @Autowired
    protected ServerInformation(WebServerApplicationContext context) {
        this.context = context;
    }
    /**
     * Logs the URL of Swagger UI on server start.
     */
    @PostConstruct
    public void logSwaggerMessage()
    {
        int port = context.getWebServer().getPort();
        logger.info("SWAGGER UI IS AVAILABLE AT: http://localhost:" + port + "/swagger-ui/index.html");
    }
}


