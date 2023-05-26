package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "SUBSCRIPTION_ADDRESSES")
public class SubscriptionAddress {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "SUBSCRIPTION_ADDRESS_ID")
    private int subscriptionAddressId;

    @Column( name = "ADDRESS")
    private String address;

    @Column( name = "USER_ID")
    @JoinColumn( name = "USER_ID")
    private int userId;

    @Column( name = "CRITERIA_WEATHERS")
    @OneToMany( orphanRemoval = true )
    private List<CriteriaWeather> criteriaWeathers = new ArrayList<>();

    public SubscriptionAddress() {
    }

    public SubscriptionAddress(String address, int userId) {
        this.address = address;
        this.userId = userId;
    }

    public int getSubscriptionAddressId() {
        return subscriptionAddressId;
    }

    public void setSubscriptionAddressId(int subscriptionAddressId) {
        this.subscriptionAddressId = subscriptionAddressId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<CriteriaWeather> getCriteriaWeathers() {
        return criteriaWeathers;
    }

    public void setCriteriaWeathers(List<CriteriaWeather> criteriaWeathers) {
        this.criteriaWeathers = criteriaWeathers;
    }
}
