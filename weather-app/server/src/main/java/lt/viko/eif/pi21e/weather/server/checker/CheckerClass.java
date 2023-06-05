package lt.viko.eif.pi21e.weather.server.checker;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.database.models.SubscriptionAddress;
import lt.viko.eif.pi21e.weather.server.events.CriteriaHandler;
import lt.viko.eif.pi21e.weather.server.events.EventHandler;
import lt.viko.eif.pi21e.weather.server.events.EventInfo;
import lt.viko.eif.pi21e.weather.server.events.EventPublisher;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class CheckerClass {
    private static EventPublisher eventPublisher;

    public static void run(){
        for (CriteriaWeather criteria : scanDatabase()){
            try {
                EventHandler.ProcessCriteria(criteria);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
    }

    private static List<CriteriaWeather> scanDatabase(){
        return Interactor.readAll(CriteriaWeather.class);
    }
}
