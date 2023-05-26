package lt.viko.eif.pi21e.weather.database.models;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "FAVORITE_ADDRESSES")
public class FavoriteAddress {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column( name = "FAVORITE_ADDRESS_ID")
    private int favoriteAddressId;

    @Column( name = "ADDRESS")
    private String address;

    @Column( name = "USER_ID")
    @JoinColumn( name = "USER_ID")
    private int userId;

    @Column( name = "TYPE")
    private String type;

    public FavoriteAddress() {
    }

    public FavoriteAddress(String address, int userId, String type) {
        this.address = address;
        this.userId = userId;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
