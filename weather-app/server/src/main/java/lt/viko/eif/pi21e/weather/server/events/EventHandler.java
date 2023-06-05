package lt.viko.eif.pi21e.weather.server.events;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.server.rest.api.weatherapi.WeatherAPIClient;
import net.minidev.json.writer.JsonReader;
import org.json.JSONObject;
import javax.json.*;
import java.io.StringReader;
import java.util.List;
import java.util.Map;

public class EventHandler {
    private JsonObject jsonObject;

    public static void ProcessCriteria(CriteriaWeather criteria) throws JsonProcessingException {
        String name = criteria.getCriteriaName();
        String less_equal_more = criteria.getLess_equal_more();
        String value = criteria.getCriteriaValue();
        String address = criteria.getSubscriptionAddress().getAddress();
        Map<String, String> result = CriteriaHandler.checkCriteria(name, less_equal_more, value, address);
        if (result.get("Success").equals(Boolean.toString(true))) {
            EventPublisher eventPublisher = new EventPublisher();
            eventPublisher.publishEvent(criteria.getSubscriptionAddress().getSubscriptionAddressId(),
                    new EventInfo(name, less_equal_more, value, result.get("New Value"), result.get("JSON")));
        }
    }
}
