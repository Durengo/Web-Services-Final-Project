package lt.viko.eif.pi21e.weather.server.rest.api.weatherapi;

import org.apache.jena.query.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class CityAreaClient {
    private static final String SERVICE_URI = "http://dbpedia.org/sparql";
    private static final double METER_TO_KM = 0.001;
    private static final double METER_TO_MILES = 0.000621371;
    private String cityName;

    public CityAreaClient(String cityName) {
        this.cityName = cityName;
    }

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

    public double getAreaInSquareKilometers() {
        return getAreaInSquareMeters() * METER_TO_KM * METER_TO_KM;
    }

    public double getRadiusInMeters() {
        return Math.sqrt(getAreaInSquareMeters() / Math.PI);
    }

    public double getRadiusInKilometers() {
        return getRadiusInMeters() * METER_TO_KM;
    }

    public double getRadiusInMiles() {
        return getRadiusInMeters() * METER_TO_MILES;
    }

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



