package lt.viko.eif.pi21e.weather.server.UnitTests;

import lt.viko.eif.pi21e.weather.server.rest.api.weatherapi.CityAreaClient;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 This class contains unit tests for the CityAreaClient class.
 */
public class CityAreaClientTest {
    private CityAreaClient cityAreaClient;

    /**
     Sets up the test environment by creating a new instance of CityAreaClient with the specified city name.
     */
    @Before
    public void setUp() {
        cityAreaClient = new CityAreaClient("Vilnius");
    }

    /**
     Tests the getRadiusInMeters method of CityAreaClient.
     It verifies that the calculated radius in meters matches the expected value.
     */
    @Test
    public void testGetRadiusInMeters() {
        double radius = cityAreaClient.getRadiusInMeters();
        assertEquals(11297.887606083717, radius, 0.001);
    }

    /**
     Tests the getRadiusInKilometers method of CityAreaClient.
     It verifies that the calculated radius in kilometers matches the expected value.
     */
    @Test
    public void testGetRadiusInKilometers() {
        double radius = cityAreaClient.getRadiusInKilometers();
        assertEquals(11.297887606083718, radius, 0.0001);
    }

    /**
     Tests the getAreaInSquareMeters method of CityAreaClient.
     It verifies that the calculated area in square meters matches the expected value.
     */
    @Test
    public void testGetAreaInSquareMeters() {
        double area = cityAreaClient.getAreaInSquareMeters();
        assertEquals(4.01E8, area, 0.1);
    }

    /**
     Tests the getRadiusInMiles method of CityAreaClient.
     It verifies that the calculated radius in miles matches the expected value.
     */
    @Test
    public void testGetRadiusInMiles() {
        double radius = cityAreaClient.getRadiusInMiles();
        assertEquals(7.020179719679846, radius, 0.0001);
    }

    /**
     Tests the getAreaInSquareKilometers method of CityAreaClient.
     It verifies that the calculated area in square kilometers matches the expected value.
     */
    @Test
    public void testGetAreaInSquareKilometers() {
        double area = cityAreaClient.getAreaInSquareKilometers();
        assertEquals(401.0, area, 0.001);
    }

    /**
     Tests the toJson method of CityAreaClient.
     It verifies that the returned JSON string matches the expected JSON representation.
     */
    @Test
    public void testToJson() {
        String expectedJson = "{\"city\":\"Vilnius\",\"area_km\":401.0,\"radius_km\":11.297887606083718,\"radius_miles\":7.020179719679846}";
        String json = cityAreaClient.toJson();
        assertEquals(expectedJson, json);
    }
}