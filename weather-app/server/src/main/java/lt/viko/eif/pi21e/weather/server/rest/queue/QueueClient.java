package lt.viko.eif.pi21e.weather.server.rest.queue;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lt.viko.eif.pi21e.weather.server.ActiveMQ.MessageReceiver;
import org.springframework.web.bind.annotation.RequestParam;

import javax.jms.JMSException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueueClient {
    public String getEvents(int id) {
        try {
            MessageReceiver messageReceiver = new MessageReceiver(Integer.toString(id));
            List<String> messages = messageReceiver.receiveAllMessages();
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, List<String>> finalJson = new HashMap<>();
            finalJson.put("messages", messages);
            return objectMapper.writeValueAsString(finalJson);
        } catch (JMSException | JsonProcessingException e) {
            return e.getMessage();
        }
    }
}
