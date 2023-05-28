package lt.viko.eif.pi21e.weather.server.util;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
/**
 * This utility class provides methods to convert Java Objects into JSON format and vice-versa.
 */
public class JObj2JSON {
    public static String convert(Object obj) throws JsonProcessingException {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        return ow.writeValueAsString(obj);
    }

    public static <T> T convert(String json, Class<T> type) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(json, type);
    }
}
