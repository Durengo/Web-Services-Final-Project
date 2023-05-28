package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "FavoriteAddress")
public class FavoriteAddress {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "FAVORITE_ADDRESS_ID")
    private int favoriteAddressId;

    @Column( name = "ADDRESS")
    private String address;

    @ManyToOne
    @JoinColumn( name = "USER_ID")
    @JsonBackReference
    private User user;

    @Column( name = "TYPE")
    private String type;

    public FavoriteAddress() {
    }

    public FavoriteAddress(String address, String type) {
        this.address = address;
        this.type = type;
    }


    public int getFavoriteAddressId() {
        return favoriteAddressId;
    }

    public void setFavoriteAddressId(int favoriteAddressId) {
        this.favoriteAddressId = favoriteAddressId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
