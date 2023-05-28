package lt.viko.eif.pi21e.weather.database.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;
/**
 * This class represents a User entity.
 * It contains information about a user including their username, mail, password, favorite addresses, and subscription addresses.
 */
@Entity
@Table(name = "User")
public class User {
    /**
     * Unique identifier of the user.
     */
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "USER_ID")
    private int userId;
    /**
     * The username of the user.
     */
    @Column( name = "USERNAME")
    private String username;
    /**
     * The email address of the user.
     */
    @Column( name = "MAIL")
    private String mail;
    /**
     * The password of the user.
     */
    @Column( name = "PASSWORD")
    private String password;
    /**
     * List of favorite addresses for the user.
     */
    @Column( name = "FAVORITE_ADDRESSES")
    @OneToMany( orphanRemoval = true, cascade=CascadeType.ALL, mappedBy = "user", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<FavoriteAddress> favoriteAddresses = new ArrayList<>();
    /**
     * List of subscription addresses for the user.
     */
    @Column( name = "SUBSCRIPTION_ADDRESSES")
    @OneToMany( orphanRemoval = true, cascade=CascadeType.ALL, mappedBy = "user" , fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<SubscriptionAddress> subscriptionAddresses = new ArrayList<>();
    /**
     * Default constructor.
     */
    public User() {
    }
    /**
     * Constructor with parameters.
     *
     * @param username the username of the user
     * @param mail the email address of the user
     * @param password the password of the user
     */
    public User(String username, String mail, String password) {
        this.username = username;
        this.mail = mail;
        this.password = password;
    }

    /**
     * Get the unique identifier of the user.
     *
     * @return the identifier of the user
     */
    public int getUserId() {
        return userId;
    }
    /**
     * Set the unique identifier of the user.
     *
     * @param userId the identifier to set
     */
    public void setUserId(int userId) {
        this.userId = userId;
    }
    /**
     * Get the username of the user.
     *
     * @return the username of the user
     */
    public String getUsername() {
        return username;
    }
    /**
     * Set the username of the user.
     *
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }
    /**
     * Get the email address of the user.
     *
     * @return the email address of the user
     */
    public String getMail() {
        return mail;
    }
    /**
     * Set the email address of the user.
     *
     * @param mail the email address to set
     */
    public void setMail(String mail) {
        this.mail = mail;
    }
    /**
     * Get the password of the user.
     *
     * @return the password of the user
     */
    public String getPassword() {
        return password;
    }
    /**
     * Set the password of the user.
     *
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
    /**
     * Get the list of favorite addresses for the user.
     *
     * @return the list of favorite addresses
     */
    public List<FavoriteAddress> getFavoriteAddresses() {
        return favoriteAddresses;
    }
    /**
     * Set the list of favorite addresses for the user.
     *
     * @param favoriteAddresses the list of favorite addresses to set
     */
    public void setFavoriteAddresses(List<FavoriteAddress> favoriteAddresses) {
        this.favoriteAddresses = favoriteAddresses;
    }
    /**
     * Get the list of subscription addresses for the user.
     *
     * @return the list of subscription addresses
     */
    public List<SubscriptionAddress> getSubscriptionAddresses() {
        return subscriptionAddresses;
    }
    /**
     * Set the list of subscription addresses for the user.
     *
     * @param subscriptionAddresses the list of subscription addresses to set
     */
    public void setSubscriptionAddresses(List<SubscriptionAddress> subscriptionAddresses) {
        this.subscriptionAddresses = subscriptionAddresses;
    }
}
