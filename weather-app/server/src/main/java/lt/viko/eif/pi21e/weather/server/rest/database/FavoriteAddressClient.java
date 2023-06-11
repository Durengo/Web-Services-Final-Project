package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.FavoriteAddress;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

/**
 * Class that provides FavoriteAddress client
 */
public class FavoriteAddressClient {
    /**
     * Method that returns FavoriteAddress by id
     * @param id id
     * @return response string in json format
     */
    public String getFavoriteAddress(int id) {
        return ClientGenericMethods.getX(id, FavoriteAddress.class);
    }

    /**
     * Method that returns all FavoriteAddresses
     * @return response string in json format
     */
    public String getFavoriteAddresses() {
        return ClientGenericMethods.getXs(FavoriteAddress.class);
    }

    /**
     * Method that creates FavoriteAddress
     * @param favoriteAddressJson FavoriteAddress json
     * @return response string in json format
     */
    public String createFavoriteAddress(String favoriteAddressJson) {
        return ClientGenericMethods.createX(favoriteAddressJson, FavoriteAddress.class);
    }

    /**
     * Method that updates FavoriteAddress
     * @param id FavoriteAddress id
     * @param favoriteAddressJson FavoriteAddress json
     * @return response string in json format
     */
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
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(check));
                } else {
                    return ResponseProvider.getResponse(500, "Couldn't update FavoriteAddress", "NULL");
                }
            } catch (JsonProcessingException e) {
                return ResponseProvider.getResponse(500, "Couldn't convert FavoriteAddress to JSON", e.getMessage());
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    /**
     * Method that deletes FavoriteAddress
     * @param id FavoriteAddress id
     * @return response string in json format
     */
    public String deleteFavoriteAddress(int id) {
        return ClientGenericMethods.deleteX(id, FavoriteAddress.class);
    }
}
