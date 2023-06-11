package lt.viko.eif.pi21e.weather.server.events;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.server.ActiveMQ.MessageSender;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import javax.jms.JMSException;
/**
 * A class that publishes events to the ActiveMQ
 */
public class EventPublisher {
    /**
     * Publishes an event to the ActiveMQ
     * @param Id the id of the event
     * @param eventInfo the event info
     */
    public void publishEvent(int Id, EventInfo eventInfo) {
        try {
            MessageSender messageSender = new MessageSender(Integer.toString(Id));
            messageSender.sendMessage(JObj2JSON.convert(eventInfo));
            messageSender.close();
        } catch (JMSException | JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
