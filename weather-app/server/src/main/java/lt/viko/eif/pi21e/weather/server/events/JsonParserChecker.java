package lt.viko.eif.pi21e.weather.server.events;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.io.IOException;
import java.util.Map;

/*
String jsonString = "{"
+ "\"location\": {"
    + "\"name\": \"Boston\","
    + "\"region\": \"Lincolnshire\","
    + "\"country\": \"United Kingdom\","
    + "\"lat\": 53.1,"
    + "\"lon\": -0.13"
+ "},"
+ "\"current\": {"
    + "\"temp_c\": 15,"
    + "\"temp_f\": 59,"
    + "\"humidity\": 59"
+ "}"
+ "}";

JsonParserChecker parserChecker = new JsonParserChecker(jsonString);

JsonValue valueToCheck = Json.createValue(16);
boolean result = parserChecker.checkParameter("temp_c", valueToCheck, "<");
System.out.println("Is temperature less than 16°C? " + result);  // Outputs: Is temperature less than 16°C? true

JsonValue valueToCheckString = Json.createValue("Boston");
boolean result2 = parserChecker.checkParameter("name", valueToCheckString, "=");
System.out.println("Is the location name 'Boston'? " + result2);  // Outputs: Is the location name 'Boston'? true

*/
public class JsonParserChecker {
    private JsonNode jsonObject;

    // Parse the JSON when constructing the class
    public JsonParserChecker(String jsonString) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            this.jsonObject = objectMapper.readTree(jsonString);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Method to find and return a JsonNode based on the given key
    public JsonNode findParameter(String key) {
        return jsonObject.get(key);
    }

    public Map<String, String> checkParameter(String key, JsonNode valueToCheck, String operator) {
        JsonNode value = findParameter(key);
        HashMap<String, String> map = new HashMap<>();
        Boolean i;
        String e;
        String f = jsonObject.toString();
        if (value.isNumber() && valueToCheck.isNumber()) {
            double compareValue = value.doubleValue();
            double valueToCheckDouble = valueToCheck.doubleValue();

            switch (operator) {
                case "MORE":
                    i = Boolean.valueOf(compareValue > valueToCheckDouble);
                    e = String.valueOf(compareValue);
                    map.put("Success", i.toString());
                    map.put("New Value", e);
                    map.put("JSON", f);
                    return map;
                case "LESS":
                    i = Boolean.valueOf(compareValue < valueToCheckDouble);
                    e = String.valueOf(compareValue);
                    map.put("Success", i.toString());
                    map.put("New Value", e);
                    map.put("JSON", f);
                    return map;
                case "EQUAL":
                    i = Boolean.valueOf(compareValue == valueToCheckDouble);
                    e = String.valueOf(compareValue);
                    map.put("Success", i.toString());
                    map.put("New Value", e);
                    map.put("JSON", f);
                    return map;
                default:
                    throw new IllegalArgumentException("Operator must be one of: MORE, LESS, EQUAL");
            }
        } else if (value.isTextual() && valueToCheck.isTextual()) {
            i = Boolean.valueOf(value.textValue() == valueToCheck.textValue());
            e = value.textValue();
            map.put("Success", i.toString());
            map.put("New Value", e);
            map.put("JSON", f);
            return map;
        } else if (value.isNumber() && valueToCheck.isTextual()){
            boolean valueBoolean = value.asBoolean();
            boolean valueToCheckBoolean = valueToCheck.asBoolean();

            switch (operator) {
                case "EQUAL":
                    i = Boolean.valueOf(valueBoolean == valueToCheckBoolean);
                    e = value.textValue();
                    map.put("Success", i.toString());
                    map.put("New Value", e);
                    map.put("JSON", f);
                    return map;
                default:
                    throw new IllegalArgumentException("Operator must be one of: EQUAL");
            }
        }
        map.put(null, null);
        return map;
    }


    // Method to find and return multiple JsonNodes based on the provided list of keys
    // Note: You can't create new JSON objects with the ObjectMapper, so we'll return a List of JsonNode instead.
    public List<JsonNode> findParameters(List<String> keys) {
        List<JsonNode> values = new ArrayList();
        for (String key : keys) {
            JsonNode value = findParameter(key);
            if (value != null) {
                values.add(value);
            }
        }
        return values;
    }

    // Method to check multiple parameters' values
    // Note: As we now return a List of JsonNode, you'll need to pass a List of keys and a List of values to this method.
    public boolean checkParameters(List<String> keys, List<JsonNode> valuesToCheck, String operator) {
        for (int i = 0; i < keys.size(); i++) {
            String key = keys.get(i);
            JsonNode valueToCheck = valuesToCheck.get(i);
            Map<String, String> map = checkParameter(key, valueToCheck, operator);
            if (map.get("Success").equals(Boolean.toString(false))) {
                return false;
            }
        }
        return true;
    }
}

