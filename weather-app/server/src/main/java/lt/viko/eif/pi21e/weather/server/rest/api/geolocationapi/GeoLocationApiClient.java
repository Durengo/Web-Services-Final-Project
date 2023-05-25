package lt.viko.eif.pi21e.weather.server.rest.api.geolocationapi;

import okhttp3.OkHttpClient;
import okhttp3.Request;

import java.io.IOException;

public class GeoLocationApiClient {
    /**
     * API key for WeatherAPI
     */
    private static final String API_KEY = "f7c563f4d9mshf772c724dd40635p183e71jsnc3d4f4ff3512";
    /**
     * Base URL for WeatherAPI
     */
    private static final String BASE_URL = "https://ip-geo-location.p.rapidapi.com/ip/";//23.123.12.11?format=json"

    OkHttpClient client = new OkHttpClient();
    private String sendGetRequest(String url) throws Exception {

        Request request = new Request.Builder()
                .url(url)
                .get()
                .addHeader("X-RapidAPI-Key", API_KEY)
                .addHeader("X-RapidAPI-Host", "ip-geo-location.p.rapidapi.com")
                .build();

        String response = "";

        try {
            response = client.newCall(request).execute().body().string();
        } catch (IOException e) {
            response = e.getMessage();
        }

        return response;
    }

    public String getIp(String ip) {
        String url = BASE_URL + ip + "?format=json";

        try {
            return sendGetRequest(url);
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
