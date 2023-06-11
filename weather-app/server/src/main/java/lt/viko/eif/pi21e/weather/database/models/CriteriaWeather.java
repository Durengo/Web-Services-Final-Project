package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import com.fasterxml.jackson.annotation.JsonBackReference;
/**
 * This class represents a CriteriaWeather entity.
 * It contains information about weather criteria tied to a SubscriptionAddress.
 */
@Entity
@Table(name = "CriteriaWeather")
public class CriteriaWeather {
    /**
     * Unique identifier of the criteria weather.
     */
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "CRITERIA_WEATHER_ID")
    private int id;
    /**
     * Specifies if the criterion is less, equal or more.
     */
    @Column( name = "LESS_EQUAL_MORE")
    private String less_equal_more;
    /**
     * The name of the criterion.
     */
    @Column( name = "CRITERIA_NAME")
    private String criteriaName;
    /**
     * The value of the criterion.
     */
    @Column( name = "CRITERIA_VALUE")
    private String criteriaValue;
    /**
     * The associated SubscriptionAddress.
     */
    @JoinColumn( name = "SUBSCRIPTION_ADDRESS_ID")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    private SubscriptionAddress subscriptionAddress;
    /**
     * Default constructor.
     */
    public CriteriaWeather() {
    }
    /**
     * Constructor with parameters.
     *
     * @param less_equal_more specifies if the criterion is less, equal or more
     * @param criteriaName the name of the criterion
     * @param criteriaValue the value of the criterion
     */
    public CriteriaWeather(String less_equal_more, String criteriaName, String criteriaValue) {
        this.less_equal_more = less_equal_more;
        this.criteriaName = criteriaName;
        this.criteriaValue = criteriaValue;
    }
    /**
     * Get the unique identifier of the criteria weather.
     *
     * @return the identifier of the criteria weather
     */
    public int getCriteriaWeatherId() {
        return id;
    }
    /**
     * Set the unique identifier of the criteria weather.
     *
     * @param criteriaWeatherId the identifier to set
     */
    public void setCriteriaWeatherId(int criteriaWeatherId) {
        this.id = criteriaWeatherId;
    }
    /**
     * Get the less_equal_more attribute.
     *
     * @return the less_equal_more attribute
     */
    public String getLess_equal_more() {
        return less_equal_more;
    }
    /**
     * Set the less_equal_more attribute.
     *
     * @param less_equal_more the less_equal_more to set
     */
    public void setLess_equal_more(String less_equal_more) {
        this.less_equal_more = less_equal_more;
    }
    /**
     * Get the name of the criterion.
     *
     * @return the name of the criterion
     */
    public String getCriteriaName() {
        return criteriaName;
    }
    /**
     * Set the name of the criterion.
     *
     * @param criteriaName the name to set
     */
    public void setCriteriaName(String criteriaName) {
        this.criteriaName = criteriaName;
    }
    /**
     * Get the value of the criterion.
     *
     * @return the value of the criterion
     */
    public String getCriteriaValue() {
        return criteriaValue;
    }
    /**
     * Set the value of the criterion.
     *
     * @param criteriaValue the value to set
     */
    public void setCriteriaValue(String criteriaValue) {
        this.criteriaValue = criteriaValue;
    }
    /**
     * Get the associated SubscriptionAddress.
     *
     * @return the associated SubscriptionAddress
     */
    public SubscriptionAddress getSubscriptionAddress() {
        return subscriptionAddress;
    }
    /**
     * Set the associated SubscriptionAddress.
     *
     * @param subscriptionAddress the SubscriptionAddress to set
     */
    public void setSubscriptionAddress(SubscriptionAddress subscriptionAddress) {
        this.subscriptionAddress = subscriptionAddress;
    }
}
