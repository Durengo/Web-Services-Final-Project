package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.server.rest.responses.ResponseClass;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

public class CriteriaWeatherClient {

    private final String RESPONSE_ERROR = """
                    {
                      "status": 500,
                      "message": "Couldn't convert response to json",
                      "data": "NULL"
                    }""";

    private final String RESPONSE_NOT_FOUND = """
                    {
                      "status": 404,
                      "message": "Not Found",
                      "data": "NULL"
                    }""";

    public String getCriteriaWeather(int id) {
        CriteriaWeather criteriaWeather = Interactor.read(CriteriaWeather.class, id);

        ResponseClass response = new ResponseClass();
        if (criteriaWeather != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(criteriaWeather);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert CriteriaWeather to JSON");
                response.setData("NULL");
            }
            response.setData(json);
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String getCriteriaWeathers() {
        List<CriteriaWeather> criteriaWeathers = Interactor.readAll(CriteriaWeather.class);

        ResponseClass response = new ResponseClass();
        if (criteriaWeathers != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(criteriaWeathers);
                response.setData(json);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert CriteriaWeathers to JSON");
                response.setData("NULL");
            }
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String createCriteriaWeather(String criteriaWeatherJson) {
        try {
            CriteriaWeather newCriteriaWeather = null;
            ResponseClass response = new ResponseClass();
            try {
                newCriteriaWeather = JObj2JSON.convert(criteriaWeatherJson, CriteriaWeather.class);
                Interactor.set(newCriteriaWeather);
                CriteriaWeather check = Interactor.read(CriteriaWeather.class, newCriteriaWeather.getCriteriaWeatherId());
                if (check != null) {
                    response.setStatus(201);
                    response.setMessage("Created");
                    response.setData(JObj2JSON.convert(check));
                } else {
                    response.setStatus(500);
                    response.setMessage("Couldn't create CriteriaWeather");
                    response.setData("NULL");
                }
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert CriteriaWeather to JSON");
                response.setData("NULL");
            }
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String deleteCriteriaWeather(int id) {
        CriteriaWeather existingCriteriaWeather = Interactor.read(CriteriaWeather.class, id);

        ResponseClass response = new ResponseClass();
        if (existingCriteriaWeather != null) {
            Interactor.delete(CriteriaWeather.class, id);
            response.setStatus(200);
            response.setMessage("OK");
            response.setData("NULL");
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }
}
