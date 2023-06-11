package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonBackReference;
/**
 * This class represents a SubscriptionAddress entity.
 * It contains information about a user's subscription addresses.
 */
@Entity
@Table(name = "SubscriptionAddress")
public class SubscriptionAddress {
    /**
     * Unique identifier of the subscription address.
     */
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "SUBSCRIPTION_ADDRESS_ID")
    private int id;
    /**
     * The actual address that the user is subscribed to.
     */
    @Column( name = "ADDRESS")
    private String address;
    /**
     * The user who subscribed to this address.
     */
    @JoinColumn( name = "USER_ID")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    private User user;
    /**
     * List of weather criteria related to this subscription address.
     */
    @Column( name = "CRITERIA_WEATHERS")
    @OneToMany( orphanRemoval = true, cascade=CascadeType.ALL, mappedBy = "subscriptionAddress", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<CriteriaWeather> criteriaWeathers = new ArrayList<>();
    /**
     * Default constructor.
     */
    public SubscriptionAddress() {
    }
    /**
     * Constructor with parameters.
     *
     * @param address the address the user is subscribed to
     */
    public SubscriptionAddress(String address) {
        this.address = address;
    }
    /**
     * Get the unique identifier of the subscription address.
     *
     * @return the identifier of the subscription address
     */
    public int getSubscriptionAddressId() {
        return id;
    }
    /**
     * Set the unique identifier of the subscription address.
     *
     * @param subscriptionAddressId the identifier to set
     */
    public void setSubscriptionAddressId(int subscriptionAddressId) {
        this.id = subscriptionAddressId;
    }
    /**
     * Get the address that the user is subscribed to.
     *
     * @return the subscribed address
     */
    public String getAddress() {
        return address;
    }
    /**
     * Set the address that the user is subscribed to.
     *
     * @param address the address to set
     */
    public void setAddress(String address) {
        this.address = address;
    }
    /**
     * Get the list of weather criteria related to this subscription address.
     *
     * @return the list of weather criteria
     */
    public List<CriteriaWeather> getCriteriaWeathers() {
        return criteriaWeathers;
    }
    /**
     * Set the list of weather criteria related to this subscription address.
     *
     * @param criteriaWeathers the list of weather criteria to set
     */
    public void setCriteriaWeathers(List<CriteriaWeather> criteriaWeathers) {
        this.criteriaWeathers = criteriaWeathers;
    }
    /**
     * Get the user who is subscribed to this address.
     *
     * @return the user who is subscribed to this address
     */
    public User getUser() {
        return user;
    }
    /**
     * Set the user who is subscribed to this address.
     *
     * @param user the User to set
     */
    public void setUser(User user) {
        this.user = user;
    }
}
