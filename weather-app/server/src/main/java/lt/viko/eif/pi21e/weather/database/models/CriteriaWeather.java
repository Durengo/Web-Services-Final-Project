package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "CriteriaWeather")
public class CriteriaWeather {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "CRITERIA_WEATHER_ID")
    private int criteriaWeatherId;

    @Column( name = "LESS_EQUAL_MORE")
    private String less_equal_more;

    @Column( name = "CRITERIA_NAME")
    private String criteriaName;

    @Column( name = "CRITERIA_VALUE")
    private String criteriaValue;

    @JoinColumn( name = "SUBSCRIPTION_ADDRESS_ID")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    private SubscriptionAddress subscriptionAddress;

    public CriteriaWeather() {
    }

    public CriteriaWeather(String less_equal_more, String criteriaName, String criteriaValue) {
        this.less_equal_more = less_equal_more;
        this.criteriaName = criteriaName;
        this.criteriaValue = criteriaValue;
    }

    public int getCriteriaWeatherId() {
        return criteriaWeatherId;
    }

    public void setCriteriaWeatherId(int criteriaWeatherId) {
        this.criteriaWeatherId = criteriaWeatherId;
    }

    public String getLess_equal_more() {
        return less_equal_more;
    }

    public void setLess_equal_more(String less_equal_more) {
        this.less_equal_more = less_equal_more;
    }

    public String getCriteriaName() {
        return criteriaName;
    }

    public void setCriteriaName(String criteriaName) {
        this.criteriaName = criteriaName;
    }

    public String getCriteriaValue() {
        return criteriaValue;
    }

    public void setCriteriaValue(String criteriaValue) {
        this.criteriaValue = criteriaValue;
    }

    public SubscriptionAddress getSubscriptionAddress() {
        return subscriptionAddress;
    }

    public void setSubscriptionAddress(SubscriptionAddress subscriptionAddress) {
        this.subscriptionAddress = subscriptionAddress;
    }
}
