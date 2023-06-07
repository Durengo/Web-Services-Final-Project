package lt.viko.eif.pi21e.weather.server.rest.database.other;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

/**
 * A class that contains generic methods for all database clients
 */
public class ClientGenericMethods {
    /**
     * Gets object of a given type from the database
     * @param type the type of the objects
     * @return a response string containing code, message and data
     */
    public static <T> String getX(int id, Class<T> type) {
        T o = Interactor.read(type, id);
        if (o != null) {
            try {
                return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(o));
            } catch (JsonProcessingException e) {
                return ResponseProvider.getResponse(500, "Couldn't convert "+ type.getSimpleName() +
                        " to JSON", e.getMessage());
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    /**
     * Gets object of a given type from the database by a given parameter
     * @param param the parameter to search by
     * @param value the value of the parameter
     * @param type the type of the object
     * @return a response string containing code, message and data
     */
    public static <T> String getX(String param, String value, Class<T> type) {
        T o = Interactor.readByParam(type, param, value);
        if (o != null) {
            try {
                return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(o));
            } catch (JsonProcessingException e) {
                return ResponseProvider.getResponse(500, "Couldn't convert "+ type.getSimpleName() +
                        " to JSON", e.getMessage());
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    /**
     * Gets all objects of a given type from the database
     * @param type the type of the objects
     * @return a response string containing code, message and data
     */
    public static <T> String getXs(Class<T> type) {
        List<T> os = Interactor.readAll(type);
        if (os != null) {
            try {
                return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(os));
            } catch (JsonProcessingException e) {
                return ResponseProvider.getResponse(500, "Couldn't convert "+ type.getSimpleName() +
                        " to JSON", e.getMessage());
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    /**
     * Creates an object of a given type in the database
     * @param json the object in JSON format
     * @param type the type of the object
     * @return a response string containing code, message and data
     */
    public static <T> String createX(String json, Class<T> type) {
        try {
            T o = JObj2JSON.convert(json, type);
            int id = Interactor.set(o);
            return ResponseProvider.getResponse(200, Integer.toString(id), JObj2JSON.convert(o));
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert "+ type.getSimpleName() +
                    " to JSON", e.getMessage());
        }
    }

    /**
     * Deletes an object of a given type from the database
     * @param id the id of the object
     * @param type the type of the object
     * @return a response string containing code, message and data
     */
    public static <T> String deleteX(int id, Class<T> type) {
        T o = Interactor.read(type, id);
        if (o != null) {
            Interactor.delete(type, id);
            return ResponseProvider.getResponse(200, "OK", "NULL");
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    /**
     * Deletes an object of a given type from the database by a given parameter
     * @param param the parameter to search by
     * @param value the value of the parameter
     * @param type the type of the object
     * @return a response string containing code, message and data
     */
    public static <T> String deleteX(String param, String value, Class<T> type) {
        T o = Interactor.readByParam(type, param, value);
        if (o != null) {
            Interactor.deleteByParam(type, param, value);
            return ResponseProvider.getResponse(200, "OK", "NULL");
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }
}
