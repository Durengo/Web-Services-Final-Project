package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.database.models.SubscriptionAddress;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

/**
 * Class that provides SubscriptionAddress client
 */
public class SubscriptionAddressClient {
    /**
     * Method that returns SubscriptionAddress by id
     * @param id id
     * @return response string in json format
     */
    public String getSubscriptionAddress(int id) {
        return ClientGenericMethods.getX(id, SubscriptionAddress.class);
    }

    /**
     * Method that returns SubscriptionAddress list
     * @return response string in json format
     */
    public String getSubscriptionAddresses() {
        return ClientGenericMethods.getXs(SubscriptionAddress.class);
    }

    /**
     * Method that creates SubscriptionAddress
     * @param subscriptionAddressJson SubscriptionAddress json
     * @return response string in json format
     */
    public String createSubscriptionAddress(String subscriptionAddressJson) {
        return ClientGenericMethods.createX(subscriptionAddressJson, SubscriptionAddress.class);
    }

    /**
     * Method that updates SubscriptionAddress
     * @param id SubscriptionAddress id
     * @param subscriptionAddressJson SubscriptionAddress json
     * @return response string in json format
     */
    // idk how to properly generalize
    public String updateSubscriptionAddress(int id, String subscriptionAddressJson) {
        try {
            SubscriptionAddress existingSubscriptionAddress = Interactor.read(SubscriptionAddress.class, id);
            if (existingSubscriptionAddress != null) {
                SubscriptionAddress updatedSubscriptionAddress = JObj2JSON.convert(subscriptionAddressJson, SubscriptionAddress.class);
                if (updatedSubscriptionAddress.getAddress() != null) {
                    existingSubscriptionAddress.setAddress(updatedSubscriptionAddress.getAddress());
                }
                Interactor.update(existingSubscriptionAddress);
                SubscriptionAddress check = Interactor.read(SubscriptionAddress.class, id);
                if (check != null) {
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(check));
                } else {
                    return ResponseProvider.getResponse(500, "Couldn't update SubscriptionAddress", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(404, "Not Found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert SubscriptionAddress to JSON", e.getMessage());
        }
    }

    /**
     * Method that deletes SubscriptionAddress
     * @param id SubscriptionAddress id
     * @return response string in json format
     */
    public String deleteSubscriptionAddress(int id) {
        return ClientGenericMethods.deleteX(id, SubscriptionAddress.class);
    }

    /**
     * Method that adds CriteriaWeather to SubscriptionAddress
     * @param subId SubscriptionAddress id
     * @param criteriaWeatherJson CriteriaWeather json
     * @return response string in json format
     */
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
                        return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(check));
                    } else {
                        return ResponseProvider.getResponse(500, "Couldn't add criteria weather", "NULL");
                    }
                } else {
                    return ResponseProvider.getResponse(500, "Subscribed address was destroyed", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(404, "Not Found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert CriteriaWeather to JSON", e.getMessage());
        }
    }

    /**
     * Method that deletes CriteriaWeather from SubscriptionAddress
     * @param subId SubscriptionAddress id
     * @param criteriaWeatherId CriteriaWeather id
     * @return response string in json format
     */
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
                    return ResponseProvider.getResponse(200, "OK", "Criteria weather successfully removed");
                } else {
                    return ResponseProvider.getResponse(404, "Criteria Weather not found", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(404, "Subscription Address not found", "NULL");
            }
        } catch (Exception e) {
            return ResponseProvider.getResponse(500, "Couldn't delete Criteria Weather", e.getMessage());
        }
    }

}
