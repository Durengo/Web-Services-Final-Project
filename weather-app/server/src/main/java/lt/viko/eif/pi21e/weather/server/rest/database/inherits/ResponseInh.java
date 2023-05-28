package lt.viko.eif.pi21e.weather.server.rest.database.inherits;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.server.rest.responses.ResponseClass;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

public class ResponseInh {
    public String getResponse(int code, String message, String data) {
        ResponseClass response = new ResponseClass();
        response.setStatus(code);
        response.setMessage(message);
        response.setData(data);
        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return """
                    {
                      "status": 500,
                      "message": "Couldn't convert response to json",
                      "data": "NULL"
                    }""";
        }
    }
}
