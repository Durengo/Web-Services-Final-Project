package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.database.models.SubscriptionAddress;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

public class SubscriptionAddressClient extends ResponseProvider {
    public String getSubscriptionAddress(int id) {
        return ClientGenericMethods.getX(id, SubscriptionAddress.class);
    }

    public String getSubscriptionAddresses() {
        return ClientGenericMethods.getXs(SubscriptionAddress.class);
    }

    public String createSubscriptionAddress(String subscriptionAddressJson) {
        return ClientGenericMethods.createX(subscriptionAddressJson, SubscriptionAddress.class);
    }

    public String deleteSubscriptionAddress(int id) {
        return ClientGenericMethods.deleteX(id, SubscriptionAddress.class);
    }

    public String addCriteriaWeather(int subId, String criteriaWeatherJson) {
        try {
            SubscriptionAddress existingSubscriptionAddress = Interactor.read(SubscriptionAddress.class, subId);
            if (existingSubscriptionAddress != null) {
                CriteriaWeather criteriaWeather = JObj2JSON.convert(criteriaWeatherJson, CriteriaWeather.class);
                criteriaWeather.setSubscriptionAddress(existingSubscriptionAddress);
                List<CriteriaWeather> collection = existingSubscriptionAddress.getCriteriaWeathers();
                collection.add(criteriaWeather);
                existingSubscriptionAddress.setCriteriaWeathers(collection);
                Interactor.update(existingSubscriptionAddress);
                SubscriptionAddress check = Interactor.read(SubscriptionAddress.class, subId);
                boolean found = false;
                if (check != null) {
                    for (CriteriaWeather criteriaWeather1 : check.getCriteriaWeathers()) {
                        if (criteriaWeather1.getLess_equal_more().equals(criteriaWeather.getLess_equal_more()) &&
                                criteriaWeather1.getCriteriaName().equals(criteriaWeather.getCriteriaName()) &&
                                criteriaWeather1.getCriteriaValue().equals(criteriaWeather.getCriteriaValue())) {
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        return getResponse(200, "OK", JObj2JSON.convert(check));
                    } else {
                        return getResponse(500, "Couldn't add criteria weather", "NULL");
                    }
                } else {
                    return getResponse(500, "Subscribed address was destroyed", "NULL");
                }
            } else {
                return getResponse(404, "Not Found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return getResponse(500, "Couldn't convert CriteriaWeather to JSON", e.getMessage());
        }
    }

    public String deleteCriteriaWeather(int subId, int criteriaWeatherId) {
        try {
            SubscriptionAddress subscriptionAddress = Interactor.read(SubscriptionAddress.class, subId);
            if (subscriptionAddress != null) {
                List<CriteriaWeather> criteriaWeathers = subscriptionAddress.getCriteriaWeathers();
                CriteriaWeather criteriaToRemove = null;
                for (CriteriaWeather criteriaWeather : criteriaWeathers) {
                    if (criteriaWeather.getCriteriaWeatherId() == criteriaWeatherId) {
                        criteriaToRemove = criteriaWeather;
                        break;
                    }
                }
                if (criteriaToRemove != null) {
                    criteriaWeathers.remove(criteriaToRemove);
                    subscriptionAddress.setCriteriaWeathers(criteriaWeathers);
                    Interactor.update(subscriptionAddress);
                    return getResponse(200, "OK", "Criteria weather successfully removed");
                } else {
                    return getResponse(404, "Criteria Weather not found", "NULL");
                }
            } else {
                return getResponse(404, "Subscription Address not found", "NULL");
            }
        } catch (Exception e) {
            return getResponse(500, "Couldn't delete Criteria Weather", e.getMessage());
        }
    }

}
