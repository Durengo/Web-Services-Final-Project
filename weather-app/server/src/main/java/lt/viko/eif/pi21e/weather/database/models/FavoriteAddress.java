package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import com.fasterxml.jackson.annotation.JsonBackReference;
/**
 * This class represents a FavoriteAddress entity.
 * It contains information about a user's favorite addresses.
 */
@Entity
@Table(name = "FavoriteAddress")
public class FavoriteAddress {
    /**
     * Unique identifier of the favorite address.
     */
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "FAVORITE_ADDRESS_ID")
    private int id;
    /**
     * The actual address that is favored by the user.
     */
    @Column( name = "ADDRESS")
    private String address;
    /**
     * The user who favorited this address.
     */
    @ManyToOne
    @JoinColumn( name = "USER_ID")
    @JsonBackReference
    private User user;
    /**
     * The type of this favorite address.
     */
    @Column( name = "TYPE")
    private String type;
    /**
     * Default constructor.
     */
    public FavoriteAddress() {
    }
    /**
     * Constructor with parameters.
     *
     * @param address the favored address
     * @param type the type of the address
     */
    public FavoriteAddress(String address, String type) {
        this.address = address;
        this.type = type;
    }

    /**
     * Get the unique identifier of the favorite address.
     *
     * @return the identifier of the favorite address
     */
    public int getFavoriteAddressId() {
        return id;
    }
    /**
     * Set the unique identifier of the favorite address.
     *
     * @param favoriteAddressId the identifier to set
     */
    public void setFavoriteAddressId(int favoriteAddressId) {
        this.id = favoriteAddressId;
    }
    /**
     * Get the favored address.
     *
     * @return the favored address
     */
    public String getAddress() {
        return address;
    }
    /**
     * Set the favored address.
     *
     * @param address the address to set
     */
    public void setAddress(String address) {
        this.address = address;
    }
    /**
     * Get the type of this favorite address.
     *
     * @return the type of this favorite address
     */
    public String getType() {
        return type;
    }
    /**
     * Set the type of this favorite address.
     *
     * @param type the type to set
     */
    public void setType(String type) {
        this.type = type;
    }
    /**
     * Get the user who favorited this address.
     *
     * @return the user who favorited this address
     */
    public User getUser() {
        return user;
    }
    /**
     * Set the user who favorited this address.
     *
     * @param user the User to set
     */
    public void setUser(User user) {
        this.user = user;
    }
}
