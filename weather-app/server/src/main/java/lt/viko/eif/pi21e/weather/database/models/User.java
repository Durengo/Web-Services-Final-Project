package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "USER_ID")
    private int userId;

    @Column( name = "USERNAME")
    private String username;

    @Column( name = "MAIL")
    private String mail;

    @Column( name = "PASSWORD")
    private String password;

    @Column( name = "FAVORITE_ADDRESSES")
    @OneToMany( orphanRemoval = true, cascade=CascadeType.ALL, mappedBy = "user")
    private List<FavoriteAddress> favoriteAddresses = new ArrayList<>();

    @Column( name = "SUBSCRIPTION_ADDRESSES")
    @OneToMany( orphanRemoval = true, cascade=CascadeType.ALL, mappedBy = "user" )
    private List<SubscriptionAddress> subscriptionAddresses = new ArrayList<>();

    public User() {
    }

    public User(String username, String mail, String password) {
        this.username = username;
        this.mail = mail;
        this.password = password;
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<FavoriteAddress> getFavoriteAddresses() {
        return favoriteAddresses;
    }

    public void setFavoriteAddresses(List<FavoriteAddress> favoriteAddresses) {
        this.favoriteAddresses = favoriteAddresses;
    }

    public List<SubscriptionAddress> getSubscriptionAddresses() {
        return subscriptionAddresses;
    }

    public void setSubscriptionAddresses(List<SubscriptionAddress> subscriptionAddresses) {
        this.subscriptionAddresses = subscriptionAddresses;
    }
}
