package lt.viko.eif.pi21e.weather.server.events;

public class EventInfo {
    private String criteriaName;

    private String less_equal_more;
    private String criteriaValue;
    private String currentValue;
    private String fullJson;

    public EventInfo(String criteriaName, String less_equal_more, String criteriaValue, String currentValue, String fullJson) {
        this.criteriaName = criteriaName;
        this.less_equal_more = less_equal_more;
        this.criteriaValue = criteriaValue;
        this.currentValue = currentValue;
        this.fullJson = fullJson;
    }

    public EventInfo(){

    }

    public String getCriteriaName() {
        return criteriaName;
    }

    public void setCriteriaName(String criteriaName) {
        this.criteriaName = criteriaName;
    }

    public String getLess_equal_more() {
        return less_equal_more;
    }

    public void setLess_equal_more(String less_equal_more) {
        this.less_equal_more = less_equal_more;
    }

    public String getCriteriaValue() {
        return criteriaValue;
    }

    public void setCriteriaValue(String criteriaValue) {
        this.criteriaValue = criteriaValue;
    }

    public String getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(String currentValue) {
        this.currentValue = currentValue;
    }

    public String getFullJson() {
        return fullJson;
    }

    public void setFullJson(String fullJson) {
        this.fullJson = fullJson;
    }
}
