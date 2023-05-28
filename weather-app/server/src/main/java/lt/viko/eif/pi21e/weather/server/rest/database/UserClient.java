package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.User;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ClientGenericMethods;
import lt.viko.eif.pi21e.weather.server.rest.database.other.ResponseProvider;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;


public class UserClient extends ResponseProvider {
    public String getUser(int id) {
        return ClientGenericMethods.getX(id, User.class);
    }

    public String getUser(String username) {
        return ClientGenericMethods.getX("username", username, User.class);
    }

    public String getUsers() {
        return ClientGenericMethods.getXs(User.class);
    }

    public String createUser(String userJson) {
        return ClientGenericMethods.createX(userJson, User.class);
    }

    // I STILL DONT KNOW HOW TO GENERALIZE THIS
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
                    return getResponse(200, "OK", JObj2JSON.convert(newUserCheck));
                } else {
                    return getResponse(500, "User not updated", "NULL");
                }
            } else {
                return getResponse(500, "User destroyed during update", "NULL");
            }
        } catch (JsonProcessingException e) {
            return getResponse(500, "Couldn't convert user to JSON", e.getMessage());
        }
    }

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
                    return getResponse(200, "OK", JObj2JSON.convert(newUserCheck));
                } else {
                    return getResponse(500, "User not updated", "NULL");
                }
            } else {
                return getResponse(500, "User destroyed during update", "NULL");
            }
        } catch (JsonProcessingException e) {
            return getResponse(500, "Couldn't convert user to JSON", e.getMessage());
        }
    }

    public String deleteUser(int id) {
        return ClientGenericMethods.deleteX(id, User.class);
    }

    public String deleteUser(String username) {
        return ClientGenericMethods.deleteX("username", username, User.class);
    }

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
                    return getResponse(200, "OK", JObj2JSON.convert(newSubscription));
                } else {
                    return getResponse(500, "Subscription address not added", "NULL");
                }
            } else {
                return getResponse(500, "User not found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return getResponse(500, "Couldn't convert subscription address to JSON", e.getMessage());
        }
    }

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
                    return getResponse(200, "OK", JObj2JSON.convert(newFavorite));
                } else {
                    return getResponse(500, "Favorite address not added", "NULL");
                }
            } else {
                return getResponse(500, "User not found", "NULL");
            }
        } catch (JsonProcessingException e) {
            return getResponse(500, "Couldn't convert favorite address to JSON", e.getMessage());
        }
    }

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
                    return getResponse(200, "OK", "NULL");
                } else {
                    return getResponse(500, "Subscription address not found", "NULL");
                }
            } else {
                return getResponse(500, "User not found", "NULL");
            }
        } catch (Exception e) {
            return getResponse(500, "Error deleting subscription address", e.getMessage());
        }
    }

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
                    return getResponse(200, "OK", "NULL");
                } else {
                    return getResponse(500, "Favorite address not found", "NULL");
                }
            } else {
                return getResponse(500, "User not found", "NULL");
            }
        } catch (Exception e) {
            return getResponse(500, "Error deleting favorite address", e.getMessage());
        }
    }


}
