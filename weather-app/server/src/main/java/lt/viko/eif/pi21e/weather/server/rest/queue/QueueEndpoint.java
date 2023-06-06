package lt.viko.eif.pi21e.weather.server.rest.queue;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/queue")
public class QueueEndpoint {
    @GetMapping(value = "/{id}")
    public String getQueue(@RequestParam int id){
        QueueClient queueClient = new QueueClient();
        return queueClient.getEvents(id);
    }
}
