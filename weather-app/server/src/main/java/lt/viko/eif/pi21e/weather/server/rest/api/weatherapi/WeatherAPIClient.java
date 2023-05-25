package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import okhttp3.OkHttpClient;
import okhttp3.Request;

import java.io.IOException;

public class WeatherAPIClient {
    private static final String API_KEY = "151f9551e9msh5ec4045774e1017p1dff04jsn45c04fda1984";
    private static final String BASE_URL = "https://weatherapi-com.p.rapidapi.com/";
    OkHttpClient client = new OkHttpClient();

    //forecast.json


    public String getCurrentWeatherData(String city){

        String url = BASE_URL + "current.json?q=" + city;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public String getCurrentWeatherData(float lat, float lon){
        String url = BASE_URL + "current.json?q=" + lat + "%2C" + lon;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    private String sendGetRequest(String url) throws Exception {
        Request request = new Request.Builder()
                .url(url)
                .get()
                .addHeader("X-RapidAPI-Key", API_KEY)
                .addHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
                .build();

        String response = "";

        try {
            response = client.newCall(request).execute().body().string();
        } catch (IOException e) {
            response = e.getMessage();
        }

        return response;
    }

    public String getForecastWeatherData(float lat, float lon, int days) {
        String url = BASE_URL + "forecast.json?q=" + lat + "%2C" + lon + "&days=" + days;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public String getForecastWeatherData(String city, int days) {
        String url = BASE_URL + "forecast.json?q=" + city + "&days=" + days;

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
