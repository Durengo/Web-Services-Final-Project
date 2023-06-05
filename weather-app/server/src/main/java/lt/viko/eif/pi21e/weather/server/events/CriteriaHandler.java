package lt.viko.eif.pi21e.weather.server.events;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lt.viko.eif.pi21e.weather.server.rest.api.weatherapi.WeatherAPIClient;
import org.json.JSONObject;

import javax.json.Json;
import javax.json.JsonValue;
import java.util.Map;

public class CriteriaHandler {

    public static Map<String, String> checkCriteria(String name, String lessEqualMore, String value, String address) {
        WeatherAPIClient client = new WeatherAPIClient();
        JSONObject json = new JSONObject(client.getCurrentWeatherData(address));
        JSONObject current = json.getJSONObject("current");
        JsonValue valueToCheck;
        try {
            valueToCheck = Json.createValue(Integer.parseInt(value));
        } catch (NumberFormatException e) {
            try {
                valueToCheck = Json.createValue(Float.parseFloat(value));
            } catch (NumberFormatException ex) {
                valueToCheck = Json.createValue(value);
            }
        }
        String jsonString = valueToCheck.toString(); // Convert JsonValue to JSON string
        JsonNode jsonNode;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            jsonNode = objectMapper.readTree(jsonString); // Convert JSON string to JsonNode
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        JsonParserChecker jsonParserChecker = new JsonParserChecker(current.toString());
        return jsonParserChecker.checkParameter(name, jsonNode, lessEqualMore);
    }
}
