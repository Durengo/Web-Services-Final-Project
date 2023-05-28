package lt.viko.eif.pi21e.weather.server.rest.database.other;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

public class ClientGenericMethods {
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

    public static <T> String createX(String json, Class<T> type) {
        try {
            T o = JObj2JSON.convert(json, type);
            Interactor.set(o);
            return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(o));
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert "+ type.getSimpleName() +
                    " to JSON", e.getMessage());
        }
    }

    public static <T> String deleteX(int id, Class<T> type) {
        T o = Interactor.read(type, id);
        if (o != null) {
            Interactor.delete(type, id);
            return ResponseProvider.getResponse(200, "OK", "NULL");
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

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
