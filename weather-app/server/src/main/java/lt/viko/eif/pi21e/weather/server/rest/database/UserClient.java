package lt.viko.eif.pi21e.weather.server.rest.database;

import com.fasterxml.jackson.core.JsonProcessingException;
import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.User;
import lt.viko.eif.pi21e.weather.server.rest.responses.ResponseClass;
import lt.viko.eif.pi21e.weather.server.util.JObj2JSON;

import java.util.List;


public class UserClient {
    private final String RESPONSE_ERROR = """
                    {
                      "status": 500,
                      "message": "Couldn't convert response to json",
                      "data": "NULL"
                    }""";

    private final String RESPONSE_NOT_FOUND = """
                    {
                      "status": 404,
                      "message": "Not Found",
                      "data": "NULL"
                    }""";

    public String getUser(int id) {
        User newUser = Interactor.read(User.class, id);

        ResponseClass response = new ResponseClass();
        if (newUser != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(newUser);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert user to JSON");
                response.setData("NULL");
            }
            response.setData(json);
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String getUser(String username) {
        User newUser = Interactor.readByParam(User.class, "username", username);

        ResponseClass response = new ResponseClass();
        if (newUser != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(newUser);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert user to JSON");
                response.setData("NULL");
            }
            response.setData(json);
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String getUsers() {
        List<User> users = Interactor.readAll(User.class);

        ResponseClass response = new ResponseClass();
        if (users != null) {
            response.setStatus(200);
            response.setMessage("OK");
            String json = "";
            try {
                json = JObj2JSON.convert(users);
                response.setData(json);
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert users to JSON");
                response.setData("NULL");
            }
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String createUser(String userJson) {
        try {
            User newUser = null;
            ResponseClass response = new ResponseClass();
            try {
                newUser = JObj2JSON.convert(userJson, User.class);
                Interactor.set(newUser);
                User check = Interactor.read(User.class, newUser.getUserId());
                if (check != null) {
                    response.setStatus(201);
                    response.setMessage("Created");
                    response.setData(JObj2JSON.convert(check));
                } else {
                    response.setStatus(500);
                    response.setMessage("Couldn't create user");
                    response.setData("NULL");
                }
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert user to JSON");
                response.setData("NULL");
            }
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String updateUser(int id, String userJson) {
        try {
            User newUser = null;
            ResponseClass response = new ResponseClass();
            try {
                newUser = JObj2JSON.convert(userJson, User.class);
                User oldUser = Interactor.read(User.class, id);
                if (newUser.getUsername() != null)
                    oldUser.setUsername(newUser.getUsername());
                if (newUser.getPassword() != null)
                    oldUser.setPassword(newUser.getPassword());
                if (newUser.getMail() != null)
                    oldUser.setMail(newUser.getMail());
                Interactor.update(oldUser);
                response.setStatus(200);
                response.setMessage("OK");
                response.setData(JObj2JSON.convert(oldUser));
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert user to JSON");
                response.setData("NULL");
            }
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String updateUser(String username, String userJson) {
        try {
            User newUser = null;
            ResponseClass response = new ResponseClass();
            try {
                newUser = JObj2JSON.convert(userJson, User.class);
                User oldUser = Interactor.readByParam(User.class, "username", username);
                if (newUser.getUsername() != null)
                    oldUser.setUsername(newUser.getUsername());
                if (newUser.getPassword() != null)
                    oldUser.setPassword(newUser.getPassword());
                if (newUser.getMail() != null)
                    oldUser.setMail(newUser.getMail());
                Interactor.update(oldUser);
                response.setStatus(200);
                response.setMessage("OK");
                response.setData(JObj2JSON.convert(oldUser));
            } catch (JsonProcessingException e) {
                response.setStatus(500);
                response.setMessage("Couldn't convert user to JSON");
                response.setData("NULL");
            }
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String deleteUser(int id) {
        User existingUser = Interactor.read(User.class, id);

        ResponseClass response = new ResponseClass();
        if (existingUser != null) {
            Interactor.delete(User.class, id);
            response.setStatus(200);
            response.setMessage("User Deleted");
            response.setData("NULL");
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }

    public String deleteUser(String username) {
        User existingUser = Interactor.readByParam(User.class, "username", username);

        ResponseClass response = new ResponseClass();
        if (existingUser != null) {
            Interactor.delete(User.class, existingUser.getUserId());
            response.setStatus(200);
            response.setMessage("User Deleted");
            response.setData("NULL");
        } else {
            return RESPONSE_NOT_FOUND;
        }

        try {
            return JObj2JSON.convert(response);
        } catch (JsonProcessingException e) {
            return RESPONSE_ERROR;
        }
    }
}
