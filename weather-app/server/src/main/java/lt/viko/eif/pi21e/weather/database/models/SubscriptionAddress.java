package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "SubscriptionAddress")
public class SubscriptionAddress {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "SUBSCRIPTION_ADDRESS_ID")
    private int subscriptionAddressId;

    @Column( name = "ADDRESS")
    private String address;

    @JoinColumn( name = "USER_ID")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    private User user;

    @Column( name = "CRITERIA_WEATHERS")
    @OneToMany( orphanRemoval = true, cascade=CascadeType.ALL, mappedBy = "subscriptionAddress")
    private List<CriteriaWeather> criteriaWeathers = new ArrayList<>();

    public SubscriptionAddress() {
    }

    public SubscriptionAddress(String address) {
        this.address = address;
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

    public List<CriteriaWeather> getCriteriaWeathers() {
        return criteriaWeathers;
    }

    public void setCriteriaWeathers(List<CriteriaWeather> criteriaWeathers) {
        this.criteriaWeathers = criteriaWeathers;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
