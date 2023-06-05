package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.CriteriaWeather;
import lt.viko.eif.pi21e.weather.database.models.FavoriteAddress;
import lt.viko.eif.pi21e.weather.database.models.SubscriptionAddress;
import lt.viko.eif.pi21e.weather.database.models.User;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;

/**
 * Class that provides User client
 */
public class UserClient {
    /**
     * Method that returns User by id
     * @param id id
     * @return response string in json format
     */
    public String getUser(int id) {
        return ClientGenericMethods.getX(id, User.class);
    }

    /**
     * Method that returns user by username
     * @param username username
     * @return response string in json format
     */
    public String getUser(String username) {
        return ClientGenericMethods.getX("username", username, User.class);
    }

    /**
     * Method that returns all Users
     * @return response string in json format
     */
    public String getUsers() {
        return ClientGenericMethods.getXs(User.class);
    }

    /**
     * Method that creates User
     * @param userJson User json
     * @return response string in json format
     */
    public String createUser(String userJson) {
        return ClientGenericMethods.createX(userJson, User.class);
    }

    /**
     * Method that updates User
     * @param id User id
     * @param userJson User json
     * @return response string in json format
     */
    // I STILL DON'T KNOW HOW TO GENERALIZE THIS
    public String updateUser(int id, String userJson) {
        try {
            User newUser = JObj2JSON.convert(userJson, User.class);
            User oldUser = Interactor.read(User.class, id);
            if (newUser.getUsername() != null)
                oldUser.setUsername(newUser.getUsername());
            if (newUser.getPassword() != null)
                oldUser.setPassword(newUser.getPassword());
            if (newUser.getMail() != null)
                oldUser.setMail(newUser.getMail());
            Interactor.update(oldUser);
            User newUserCheck = Interactor.read(User.class, id);
            if (newUserCheck != null) {
                if (newUserCheck.getUsername().equals(oldUser.getUsername()) &&
                        newUserCheck.getPassword().equals(oldUser.getPassword()) &&
                        newUserCheck.getMail().equals(oldUser.getMail())) {
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(newUserCheck));
                } else {
                    return ResponseProvider.getResponse(500, "User not updated", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User destroyed during update", "NULL");
            }
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert user to JSON", e.getMessage());
        }
    }

    /**
     * Method that updates User
     * @param username User username
     * @param userJson User json
     * @return response string in json format
     */
    // ??? HOW TO GENERALIZE THIS
    public String updateUser(String username, String userJson) {
        try {
            User newUser = JObj2JSON.convert(userJson, User.class);
            User oldUser = Interactor.readByParam(User.class, "username", username);
            if (newUser.getUsername() != null)
                oldUser.setUsername(newUser.getUsername());
            if (newUser.getPassword() != null)
                oldUser.setPassword(newUser.getPassword());
            if (newUser.getMail() != null)
                oldUser.setMail(newUser.getMail());
            Interactor.update(oldUser);
            User newUserCheck = Interactor.readByParam(User.class, "username", username);
            if (newUserCheck != null) {
                if (newUserCheck.getUsername().equals(oldUser.getUsername()) &&
                        newUserCheck.getPassword().equals(oldUser.getPassword()) &&
                        newUserCheck.getMail().equals(oldUser.getMail())) {
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(newUserCheck));
                } else {
                    return ResponseProvider.getResponse(500, "User not updated", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User destroyed during update", "NULL");
            }
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert user to JSON", e.getMessage());
        }
    }

    /**
     * Method that deletes User
     * @param id User id
     * @return response string in json format
     */
    public String deleteUser(int id) {
        return ClientGenericMethods.deleteX(id, User.class);
    }

    /**
     * Method that deletes User
     * @param username User username
     * @return response string in json format
     */
    public String deleteUser(String username) {
        return ClientGenericMethods.deleteX("username", username, User.class);
    }

    /**
     * Method that adds subscription address to User's SubscriptionAddresses
     * @param userId User id
     * @return response string in json format
     */
    public String addSubscriptionAddress(int userId, String subscriptionJson){
        try {
            SubscriptionAddress newSubscription = JObj2JSON.convert(subscriptionJson, SubscriptionAddress.class);
            User user = Interactor.read(User.class, userId);
            if (user != null) {
                newSubscription.setUser(user);
                user.getSubscriptionAddresses().add(newSubscription);
                Interactor.update(user);
                User check = Interactor.read(User.class, userId);
                boolean found = false;
                for (SubscriptionAddress subscriptionAddress : check.getSubscriptionAddresses()) {
                    if (subscriptionAddress.getAddress().equals(newSubscription.getAddress())) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(newSubscription));
                } else {
                    return ResponseProvider.getResponse(500, "Subscription address not added", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User not found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert subscription address to JSON", e.getMessage());
        }
    }

    /**
     * Method that adds favorite address to User's FavoriteAddresses
     * @param userId User id
     * @param favoriteAddressJson FavoriteAddress json
     * @return response string in json format
     */
    public String addFavoriteAddress(int userId, String favoriteAddressJson){
        try {
            FavoriteAddress newFavorite = JObj2JSON.convert(favoriteAddressJson, FavoriteAddress.class);
            User user = Interactor.read(User.class, userId);
            if (user != null) {
                newFavorite.setUser(user);
                user.getFavoriteAddresses().add(newFavorite);
                Interactor.update(user);
                User check = Interactor.read(User.class, userId);
                boolean found = false;
                for (FavoriteAddress favoriteAddress : check.getFavoriteAddresses()) {
                    if (favoriteAddress.getType().equals(newFavorite.getType())
                            && favoriteAddress.getAddress().equals(newFavorite.getAddress())) {
                        found = true;
                        break;
                    }
                }
                if (found){
                    return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(newFavorite));
                } else {
                    return ResponseProvider.getResponse(500, "Favorite address not added", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User not found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return ResponseProvider.getResponse(500, "Couldn't convert favorite address to JSON", e.getMessage());
        }
    }

    /**
     * Method that deletes subscription address from User's SubscriptionAddresses
     * @param userId User id
     * @param subscriptionAddressId SubscriptionAddress id
     * @return response string in json format
     */
    public String deleteSubscriptionAddress(int userId, int subscriptionAddressId) {
        try {
            User user = Interactor.read(User.class, userId);
            if (user != null) {
                SubscriptionAddress toRemove = null;
                for (SubscriptionAddress subscriptionAddress : user.getSubscriptionAddresses()) {
                    if (subscriptionAddress.getSubscriptionAddressId() == subscriptionAddressId) {
                        toRemove = subscriptionAddress;
                        break;
                    }
                }
                if (toRemove != null) {
                    user.getSubscriptionAddresses().remove(toRemove);
                    Interactor.update(user);
                    Interactor.delete(SubscriptionAddress.class, toRemove.getSubscriptionAddressId());
                    return ResponseProvider.getResponse(200, "OK", "NULL");
                } else {
                    return ResponseProvider.getResponse(500, "Subscription address not found", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User not found", "NULL");
            }
        } catch (Exception e) {
            return ResponseProvider.getResponse(500, "Error deleting subscription address", e.getMessage());
        }
    }

    /**
     * Method that deletes favorite address from User's FavoriteAddresses
     * @param userId User id
     * @param favoriteAddressId FavoriteAddress id
     * @return response string in json format
     */
    public String deleteFavoriteAddress(int userId, int favoriteAddressId) {
        try {
            User user = Interactor.read(User.class, userId);
            if (user != null) {
                FavoriteAddress toRemove = null;
                for (FavoriteAddress favoriteAddress : user.getFavoriteAddresses()) {
                    if (favoriteAddress.getFavoriteAddressId() == favoriteAddressId) {
                        toRemove = favoriteAddress;
                        break;
                    }
                }
                if (toRemove != null) {
                    user.getFavoriteAddresses().remove(toRemove);
                    Interactor.update(user);
                    Interactor.delete(FavoriteAddress.class, toRemove.getFavoriteAddressId());
                    return ResponseProvider.getResponse(200, "OK", "NULL");
                } else {
                    return ResponseProvider.getResponse(500, "Favorite address not found", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User not found", "NULL");
            }
        } catch (Exception e) {
            return ResponseProvider.getResponse(500, "Error deleting favorite address", e.getMessage());
        }
    }


    public String addSubscriptionAddress(int userId, int subscriptionAddressId) {
        SubscriptionAddress existingSubscriptionAddress = Interactor.read(SubscriptionAddress.class, subscriptionAddressId);
        User user = Interactor.read(User.class, userId);
        if (existingSubscriptionAddress != null && user != null) {
            existingSubscriptionAddress.setUser(user);
            List<SubscriptionAddress> collection = user.getSubscriptionAddresses();
            collection.add(existingSubscriptionAddress);
            user.setSubscriptionAddresses(collection);
            Interactor.update(existingSubscriptionAddress);
            Interactor.update(user);
            User check = Interactor.read(User.class, userId);
            boolean found = false;
            if (check != null) {
                for (SubscriptionAddress subscriptionAddress1 : check.getSubscriptionAddresses()) {
                    if (subscriptionAddress1.getSubscriptionAddressId() ==
                            existingSubscriptionAddress.getSubscriptionAddressId()) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    try {
                        return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(check));
                    } catch (JsonProcessingException e) {
                        return ResponseProvider.getResponse(500, "Couldn't convert user to JSON", "NULL");
                    }
                } else {
                    return ResponseProvider.getResponse(500, "Couldn't add sbuscription address", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User was destroyed", "NULL");
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }

    public String addFavoriteAddress(int userId, int favoriteAddressId) {
        FavoriteAddress existingFavoriteAddress = Interactor.read(FavoriteAddress.class, favoriteAddressId);
        User user = Interactor.read(User.class, userId);
        if (existingFavoriteAddress != null && user != null) {
            existingFavoriteAddress.setUser(user);
            List<FavoriteAddress> collection = user.getFavoriteAddresses();
            collection.add(existingFavoriteAddress);
            user.setFavoriteAddresses(collection);
            Interactor.update(existingFavoriteAddress);
            Interactor.update(user);
            User check = Interactor.read(User.class, userId);
            boolean found = false;
            if (check != null) {
                for (FavoriteAddress favoriteAddress : check.getFavoriteAddresses()) {
                    if (favoriteAddress.getFavoriteAddressId() ==
                            existingFavoriteAddress.getFavoriteAddressId()) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    try {
                        return ResponseProvider.getResponse(200, "OK", JObj2JSON.convert(check));
                    } catch (JsonProcessingException e) {
                        return ResponseProvider.getResponse(500, "Couldn't convert user to JSON", "NULL");
                    }
                } else {
                    return ResponseProvider.getResponse(500, "Couldn't add favorite address", "NULL");
                }
            } else {
                return ResponseProvider.getResponse(500, "User was destroyed", "NULL");
            }
        } else {
            return ResponseProvider.getResponse(404, "Not Found", "NULL");
        }
    }
}
