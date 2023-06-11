package lt.viko.eif.pi21e.weather.server.checker;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.server.events.EventHandler;

import java.util.List;

/**
 * Class that checks criteria
 */
public class CheckerClass {
    /**
     * Method that checks criteria
     */
    public static void run(){
        for (CriteriaWeather criteria : scanDatabase()){
            try {
                EventHandler.ProcessCriteria(criteria);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
    }
    /**
     * Method that scans database
     * @return list of criteria
     */
    private static List<CriteriaWeather> scanDatabase(){
        return Interactor.readAll(CriteriaWeather.class);
    }
}
