package lt.viko.eif.pi21e.weather.server.configuration;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.context.WebServerApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class ServerInformation {
    private static final Logger logger = LoggerFactory.getLogger(ServerInformation.class);
    private WebServerApplicationContext context;
    @Autowired
    protected ServerInformation(WebServerApplicationContext context) {
        this.context = context;
    }

    @PostConstruct
    public void logSwaggerMessage()
    {
        int port = context.getWebServer().getPort();
        logger.info("SWAGGER UI IS AVAILABLE AT: http://localhost:" + port + "/swagger-ui/index.html");
    }
}


