package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.FavoriteAddress;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

public class FavoriteAddressClient extends ResponseProvider {
    public String getFavoriteAddress(int id) {
        return ClientGenericMethods.getX(id, FavoriteAddress.class);
    }

    public String getFavoriteAddresses() {
        return ClientGenericMethods.getXs(FavoriteAddress.class);
    }

    public String createFavoriteAddress(String favoriteAddressJson) {
        return ClientGenericMethods.createX(favoriteAddressJson, FavoriteAddress.class);
    }

    // idk how to generalize properly
    public String updateFavoriteAddress(int id, String favoriteAddressJson) {
        FavoriteAddress existingFavoriteAddress = Interactor.read(FavoriteAddress.class, id);
        if (existingFavoriteAddress != null) {
            try {
                FavoriteAddress updatedFavoriteAddress = JObj2JSON.convert(favoriteAddressJson, FavoriteAddress.class);
                if (updatedFavoriteAddress.getAddress() != null) {
                    existingFavoriteAddress.setAddress(updatedFavoriteAddress.getAddress());
                }
                if (updatedFavoriteAddress.getType() != null) {
                    existingFavoriteAddress.setType(updatedFavoriteAddress.getType());
                }
                Interactor.update(existingFavoriteAddress);
                FavoriteAddress check = Interactor.read(FavoriteAddress.class, id);
                if (check != null) {
                    return getResponse(200, "OK", JObj2JSON.convert(check));
                } else {
                    return getResponse(500, "Couldn't update FavoriteAddress", "NULL");
                }
            } catch (JsonProcessingException e) {
                return getResponse(500, "Couldn't convert FavoriteAddress to JSON", e.getMessage());
            }
        } else {
            return getResponse(404, "Not Found", "NULL");
        }
    }


    public String deleteFavoriteAddress(int id) {
        return ClientGenericMethods.deleteX(id, FavoriteAddress.class);
    }
}
