package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

/**
 * Class that provides CriteriaWeather client
 */
public class CriteriaWeatherClient {
    /**
     * Method that returns CriteriaWeather by id
     * @param id CriteriaWeather id
     * @return response string in json format
     */
    public String getCriteriaWeather(int id) {
        return ClientGenericMethods.getX(id, CriteriaWeather.class);
    }

    /**
     * Method that returns CriteriaWeather list
     * @return response string in json format
     */
    public String getCriteriaWeathers() {
        return ClientGenericMethods.getXs(CriteriaWeather.class);
    }

    /**
     * Method that creates CriteriaWeather
     * @param criteriaWeatherJson CriteriaWeather json
     * @return response string in json format
     */
    public String createCriteriaWeather(String criteriaWeatherJson) {
        return ClientGenericMethods.createX(criteriaWeatherJson, CriteriaWeather.class);
    }

    /**
     * Method that updates CriteriaWeather
     * @param id CriteriaWeather id
     * @param criteriaWeatherJson CriteriaWeather json
     * @return response string in json format
     */
    // idk how to generalize properly
    public String updateCriteriaWeather(int id, String criteriaWeatherJson) {
        CriteriaWeather existingCriteriaWeather = Interactor.read(CriteriaWeather.class, id);
        if (existingCriteriaWeather != null) {
            try {
                CriteriaWeather updatedCriteriaWeather = JObj2JSON.convert(criteriaWeatherJson, CriteriaWeather.class);
                if (updatedCriteriaWeather.getLess_equal_more() != null) {
                    existingCriteriaWeather.setLess_equal_more(updatedCriteriaWeather.getLess_equal_more());
                }
                if (updatedCriteriaWeather.getCriteriaName() != null) {
                    existingCriteriaWeather.setCriteriaName(updatedCriteriaWeather.getCriteriaName());
                }
                if (updatedCriteriaWeather.getCriteriaValue() != null) {
                    existingCriteriaWeather.setCriteriaValue(updatedCriteriaWeather.getCriteriaValue());
                }
                Interactor.update(existingCriteriaWeather);
                CriteriaWeather check = Interactor.read(CriteriaWeather.class, id);
                if (check != null) {
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(check));
                } else {
                    return ResponseProvider.getResponse(500, "Couldn't update CriteriaWeather", "NULL");
                }
            } catch (JsonProcessingException e) {
                return ResponseProvider.getResponse(500, "Couldn't convert CriteriaWeather to JSON", e.getMessage());
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    /**
     * Method that deletes CriteriaWeather
     * @param id CriteriaWeather id
     * @return response string in json format
     */
    public String deleteCriteriaWeather(int id) {
        return ClientGenericMethods.deleteX(id, CriteriaWeather.class);
    }
}
