package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.FavoriteAddress;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

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

    public String deleteFavoriteAddress(int id) {
        return ClientGenericMethods.deleteX(id, FavoriteAddress.class);
    }
}
