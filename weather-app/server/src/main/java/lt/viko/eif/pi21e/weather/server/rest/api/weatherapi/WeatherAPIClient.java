package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import okhttp3.OkHttpClient;
import okhttp3.Request;

import java.io.IOException;
import java.util.Objects;

/**
 * Represents WeatherAPIClient object which is used to send requests to WeatherAPI
 * and get responses from it.
 * @version 1.0
 * @since 1.0
 */
public class WeatherAPIClient {
    /**
     * API key for WeatherAPI
     */
    private static final String API_KEY = "151f9551e9msh5ec4045774e1017p1dff04jsn45c04fda1984";
    /**
     * Base URL for WeatherAPI
     */
    private static final String BASE_URL = "https://weatherapi-com.p.rapidapi.com/";
    /**
     * OkHttpClient object which is used to send requests
     */
    OkHttpClient client = new OkHttpClient();

    /**
     * Sends GET request to WeatherAPI
     * @param url URL to send request to
     * @return String response from WeatherAPI
     */
    private String sendGetRequest(String url) {
        Request request = new Request.Builder()
                .url(url)
                .get()
                .addHeader("X-RapidAPI-Key", API_KEY)
                .addHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
                .build();

        String response;

        try {
            response = Objects.requireNonNull(client.newCall(request).execute().body()).string();
        } catch (IOException e) {
            response = e.getMessage();
        }

        return response;
    }

    /**
     * Gets forecast weather data for specified coordinates
     * @param lat Latitude
     * @param lon Longitude
     * @param days Number of days to forecast
     * @return String response from WeatherAPI
     */
    public String getForecastWeatherData(float lat, float lon, int days) {
        String url = BASE_URL + "forecast.json?q=" + lat + "%2C" + lon + "&days=" + days;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * Gets forecast weather data for specified city
     * @param city City name
     * @param days Number of days to forecast
     * @return String response from WeatherAPI
     */
    public String getForecastWeatherData(String city, int days) {
        String url = BASE_URL + "forecast.json?q=" + city + "&days=" + days;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * Gets current weather data for specified city
     * @param city City name
     * @return String response from WeatherAPI
     */
    public String getCurrentWeatherData(String city){
        String url = BASE_URL + "current.json?q=" + city;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * Gets current weather data for specified coordinates
     * @param lat Latitude
     * @param lon Longitude
     * @return String response from WeatherAPI
     */
    public String getCurrentWeatherData(float lat, float lon){
        String url = BASE_URL + "current.json?q=" + lat + "%2C" + lon;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }
    /**
     * Gets historical weather data for specified coordinates
     * @param lat Latitude
     * @param lon Longitude
     * @param start Start date (YYYY-MM-DD)
     * @param end End date (YYYY-MM-DD)
     * @return String response from WeatherAPI
     */
    public String getHistoricalWeatherData(float lat, float lon, String start, String end) {
        String url = BASE_URL + "history.json?q=" + lat + "%2C" + lon + "&dt=" + start + "&end_dt=" + end;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    /**
     * Gets historical weather data for specified city
     * @param city City name
     * @param start Start date (YYYY-MM-DD)
     * @param end End date (YYYY-MM-DD)
     * @return String response from WeatherAPI
     */
    public String getHistoricalWeatherData(String city, String start, String end) {
        String url = BASE_URL + "history.json?q=" + city + "&dt=" + start + "&end_dt=" + end;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public String getCityRadius(String cityName){
        CityAreaClient city = new CityAreaClient(cityName);
        return city.toJson();
    }


}
