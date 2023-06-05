package lt.viko.eif.pi21e.weather.server.events;

import com.fasterxml.jackson.databind.JsonNode;
import lt.viko.eif.pi21e.weather.server.rest.api.weatherapi.WeatherAPIClient;
import org.json.JSONObject;

import javax.json.Json;
import javax.json.JsonValue;

public class CriteriaHandler {

    public static boolean checkCriteria(String name, String lessEqualMore, String value, String address) {
        WeatherAPIClient client = new WeatherAPIClient();
        JSONObject json = new JSONObject(client.getCurrentWeatherData(address));
        JSONObject current = json.getJSONObject("current");
        String type = "";
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
        JsonParserChecker jsonParserChecker = new JsonParserChecker(current.toString());
        return jsonParserChecker.checkParameter(name, (JsonNode) valueToCheck, lessEqualMore);
    }
}
