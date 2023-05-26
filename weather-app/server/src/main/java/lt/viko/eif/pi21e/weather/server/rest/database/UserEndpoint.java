package lt.viko.eif.pi21e.weather.server.rest.database;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserEndpoint {
    @PostMapping
    public String createUser(@RequestBody String user) {
        UserClient client = new UserClient();
        return client.createUser(user);
    }

    @GetMapping(value = "/{id}")
    public String getUser(@PathVariable int id) {
        UserClient client = new UserClient();
        return client.getUser(id);
    }

    @GetMapping(value = "/username")
    public String getUser(@RequestParam String username) {
        UserClient client = new UserClient();
        return client.getUser(username);
    }

    @GetMapping
    public String getUsers() {
        UserClient client = new UserClient();
        return client.getUsers();
    }

    @PutMapping(value = "/{id}")
    public String updateUser(@PathVariable int id, @RequestBody String user) {
        UserClient client = new UserClient();
        return client.updateUser(id, user);
    }

    @PutMapping(value = "/username")
    public String updateUser(@RequestParam String username, @RequestBody String user) {
        UserClient client = new UserClient();
        return client.updateUser(username, user);
    }

    @DeleteMapping(value = "/{id}")
    public String deleteUser(@PathVariable int id) {
        UserClient client = new UserClient();
        return client.deleteUser(id);
    }

    @DeleteMapping(value = "/username")
    public String deleteUser(@RequestParam String username) {
        UserClient client = new UserClient();
        return client.deleteUser(username);
    }
}
