package lt.viko.eif.pi21e.weather.server.util;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
/**
 * This utility class provides methods to convert Java Objects into JSON format and vice-versa.
 */
public class JObj2JSON {
    /**
     * Converts an object into a JSON string.
     *
     * @param obj the object to convert
     * @return the JSON string representation of the object
     * @throws JsonProcessingException if the process fails
     */
    public static String convert(Object obj) throws JsonProcessingException {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        return ow.writeValueAsString(obj);
    }
    /**
     * Converts a JSON string into an object of the specified type.
     *
     * @param json the JSON string to convert
     * @param type the type of object to convert the JSON string into
     * @return the object representation of the JSON string
     * @throws JsonProcessingException if the process fails
     */
    public static <T> T convert(String json, Class<T> type) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(json, type);
    }
}
