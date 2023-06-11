package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import org.apache.jena.query.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Class that gets city area from dbpedia
 */
public class CityAreaClient {
    /**
     * Service URI
     */
    private static final String SERVICE_URI = "http://dbpedia.org/sparql";
    /**
     * Conversion constants
     */
    private static final double METER_TO_KM = 0.001;
    /**
     * Conversion constants
     */
    private static final double METER_TO_MILES = 0.000621371;
    /**
     * Conversion constants
     */
    private String cityName;
    /**
     * Constructor
     * @param cityName city name
     */
    public CityAreaClient(String cityName) {
        this.cityName = cityName;
    }
    /**
     * Method that gets area in square meters
     * @return double
     */
    public double getAreaInSquareMeters() {
        String sparqlQuery = String.format(
                "PREFIX dbr: <http://dbpedia.org/resource/> " +
                        "PREFIX dbo: <http://dbpedia.org/ontology/> " +
                        "SELECT ?area WHERE { dbr:%s dbo:areaTotal ?area }",
                this.cityName.replace(" ", "_"));

        Query query = QueryFactory.create(sparqlQuery);
        QueryExecution qexec = QueryExecutionFactory.sparqlService(SERVICE_URI, query);

        double area = 0;
        try {
            ResultSet results = qexec.execSelect();
            if (results.hasNext()) {
                QuerySolution soln = results.nextSolution();
                area = soln.getLiteral("area").getDouble();
            }
        } finally {
            qexec.close();
        }

        return area;
    }

    /**
     * Method that gets area in square kilometers
     * @return
     */
    public double getAreaInSquareKilometers() {
        return getAreaInSquareMeters() * METER_TO_KM * METER_TO_KM;
    }
    /**
     * Method that gets area in square miles
     * @return
     */
    public double getRadiusInMeters() {
        return Math.sqrt(getAreaInSquareMeters() / Math.PI);
    }
    /**
     * Method that gets radius in kilometers
     * @return
     */
    public double getRadiusInKilometers() {
        return getRadiusInMeters() * METER_TO_KM;
    }
    /**
     * Method that gets radius in miles
     * @return
     */
    public double getRadiusInMiles() {
        return getRadiusInMeters() * METER_TO_MILES;
    }
    /**
     * Method that converts object to json
     * @return
     */
    public String toJson() {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode node = mapper.createObjectNode();
        node.put("city", cityName);
        node.put("area_km", getAreaInSquareKilometers());
        node.put("radius_km", getRadiusInKilometers());
        node.put("radius_miles", getRadiusInMiles());

        return node.toString();
    }
}



