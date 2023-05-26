package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.SubscriptionAddress;
import lt.viko.eif.pi21e.weather.server.rest.responses.ResponseClass;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

public class SubscriptionAddressClient {
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

    public String getSubscriptionAddress(int id) {
        SubscriptionAddress newSubscriptionAddress = Interactor.read(SubscriptionAddress.class, id);

        ResponseClass response = new ResponseClass();
        if (newSubscriptionAddress != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(newSubscriptionAddress);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert subscription address to JSON");
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

    public String getSubscriptionAddresses() {
        List<SubscriptionAddress> subscriptionAddresses = Interactor.readAll(SubscriptionAddress.class);

        ResponseClass response = new ResponseClass();
        if (subscriptionAddresses != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(subscriptionAddresses);
                response.setData(json);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert subscription addresses to JSON");
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

    public String createSubscriptionAddress(String subscriptionAddressJson) {
        try {
            SubscriptionAddress newSubscriptionAddress = null;
            ResponseClass response = new ResponseClass();
            try {
                newSubscriptionAddress = JObj2JSON.convert(subscriptionAddressJson, SubscriptionAddress.class);
                Interactor.set(newSubscriptionAddress);
                SubscriptionAddress check = Interactor.read(SubscriptionAddress.class, newSubscriptionAddress.getSubscriptionAddressId());
                if (check != null) {
                    response.setStatus(201);
                    response.setMessage("Created");
                    response.setData(JObj2JSON.convert(check));
                } else {
                    response.setStatus(500);
                    response.setMessage("Couldn't create subscription address");
                    response.setData("NULL");
                }
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert subscription address to JSON");
                response.setData("NULL");
            }
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String deleteSubscriptionAddress(int id) {
        SubscriptionAddress existingSubscriptionAddress = Interactor.read(SubscriptionAddress.class, id);

        ResponseClass response = new ResponseClass();
        if (existingSubscriptionAddress != null) {
            Interactor.delete(SubscriptionAddress.class, id);
            response.setStatus(200);
            response.setMessage("Subscription Address Deleted");
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
