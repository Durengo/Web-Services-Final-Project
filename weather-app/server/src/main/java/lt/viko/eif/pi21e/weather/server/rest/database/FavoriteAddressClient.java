package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.FavoriteAddress;
import lt.viko.eif.pi21e.weather.server.rest.responses.ResponseClass;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

public class FavoriteAddressClient {

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

    public String getFavoriteAddress(int id) {
        FavoriteAddress favoriteAddress = Interactor.read(FavoriteAddress.class, id);

        ResponseClass response = new ResponseClass();
        if (favoriteAddress != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(favoriteAddress);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert FavoriteAddress to JSON");
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

    public String getFavoriteAddresses() {
        List<FavoriteAddress> favoriteAddresses = Interactor.readAll(FavoriteAddress.class);

        ResponseClass response = new ResponseClass();
        if (favoriteAddresses != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(favoriteAddresses);
                response.setData(json);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert FavoriteAddresses to JSON");
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

    public String createFavoriteAddress(String favoriteAddressJson) {
        try {
            FavoriteAddress newFavoriteAddress = null;
            ResponseClass response = new ResponseClass();
            try {
                newFavoriteAddress = JObj2JSON.convert(favoriteAddressJson, FavoriteAddress.class);
                Interactor.set(newFavoriteAddress);
                FavoriteAddress check = Interactor.read(FavoriteAddress.class, newFavoriteAddress.getFavoriteAddressId());
                if (check != null) {
                    response.setStatus(201);
                    response.setMessage("Created");
                    response.setData(JObj2JSON.convert(check));
                } else {
                    response.setStatus(500);
                    response.setMessage("Couldn't create FavoriteAddress");
                    response.setData("NULL");
                }
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert FavoriteAddress to JSON");
                response.setData("NULL");
            }
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String deleteFavoriteAddress(int id) {
        FavoriteAddress existingFavoriteAddress = Interactor.read(FavoriteAddress.class, id);

        ResponseClass response = new ResponseClass();
        if (existingFavoriteAddress != null) {
            Interactor.delete(FavoriteAddress.class, id);
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
