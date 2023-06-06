package lt.viko.eif.pi21e.weather.server.events;
/**
 * Class that represents event info
 */
public class EventInfo {
    /**
     * Represents criteria name
     */
    private String criteriaName;
    /**
     * Represents less equal more
     */
    private String less_equal_more;
    /**
     * Represents criteria value
     */
    private String criteriaValue;
    /**
     * Represents current value
     */
    private String currentValue;
    /**
     * Represents full json
     */
    private String fullJson;

    /**
     * Constructor
     * @param criteriaName
     * @param less_equal_more
     * @param criteriaValue
     * @param currentValue
     * @param fullJson
     */
    public EventInfo(String criteriaName, String less_equal_more, String criteriaValue, String currentValue, String fullJson) {
        this.criteriaName = criteriaName;
        this.less_equal_more = less_equal_more;
        this.criteriaValue = criteriaValue;
        this.currentValue = currentValue;
        this.fullJson = fullJson;
    }
    /**
     * Constructor
     */
    public EventInfo(){

    }

    /**
     * Getter for criteria name
     * @return
     */
    public String getCriteriaName() {
        return criteriaName;
    }
    /**
     * Setter for criteria name
     * @param criteriaName
     */
    public void setCriteriaName(String criteriaName) {
        this.criteriaName = criteriaName;
    }
    /**
     * Getter for less equal more
     * @return
     */
    public String getLess_equal_more() {
        return less_equal_more;
    }
    /**
     * Setter for less equal more
     * @param less_equal_more
     */
    public void setLess_equal_more(String less_equal_more) {
        this.less_equal_more = less_equal_more;
    }
    /**
     * Getter for criteria value
     * @return
     */
    public String getCriteriaValue() {
        return criteriaValue;
    }
    /**
     * Setter for criteria value
     * @param criteriaValue
     */
    public void setCriteriaValue(String criteriaValue) {
        this.criteriaValue = criteriaValue;
    }
    /**
     * Getter for current value
     * @return
     */
    public String getCurrentValue() {
        return currentValue;
    }
    /**
     * Setter for current value
     * @param currentValue
     */
    public void setCurrentValue(String currentValue) {
        this.currentValue = currentValue;
    }
    /**
     * Getter for full json
     * @return
     */
    public String getFullJson() {
        return fullJson;
    }
    /**
     * Setter for full json
     * @param fullJson
     */
    public void setFullJson(String fullJson) {
        this.fullJson = fullJson;
    }
}
