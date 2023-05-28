package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

public class CriteriaWeatherClient {
    public String getCriteriaWeather(int id) {
        return ClientGenericMethods.getX(id, CriteriaWeather.class);
    }

    public String getCriteriaWeathers() {
        return ClientGenericMethods.getXs(CriteriaWeather.class);
    }

    public String createCriteriaWeather(String criteriaWeatherJson) {
        return ClientGenericMethods.createX(criteriaWeatherJson, CriteriaWeather.class);
    }

    public String deleteCriteriaWeather(int id) {
        return ClientGenericMethods.deleteX(id, CriteriaWeather.class);
    }
}
