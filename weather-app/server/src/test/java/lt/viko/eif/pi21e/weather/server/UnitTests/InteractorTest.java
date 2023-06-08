package lt.viko.eif.pi21e.weather.server.UnitTests;

import lt.viko.eif.pi21e.weather.database.interactor.Interactor;
import lt.viko.eif.pi21e.weather.database.models.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import static org.junit.Assert.*;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import java.util.List;

/**
 The InteractorTest class is used to test the functionality of the Interactor class.
 */
public class InteractorTest {
    private static SessionFactory sessionFactory;

    /**
     Sets up the test environment before running the test class.
     It configures the session factory using the Hibernate configuration and builds the session factory.
     */
    @BeforeClass
    public static void setUp() {
        StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();
        MetadataSources sources = new MetadataSources(registry);
        sessionFactory = sources.buildMetadata().buildSessionFactory();
    }

    /**
     Cleans up the test environment after running the test class.
     Closes the session factory.
     */
    @AfterClass
    public static void tearDown() {
        if (sessionFactory != null) {
            sessionFactory.close();
        }
    }

    /**
     Clears the database by deleting all User records before each test method execution.
     Uses an open session, begins a transaction, deletes all User records, and commits the transaction.
     */
    @Before
    public void clearDatabase() {
        try (Session session = sessionFactory.openSession()) {
            Transaction transaction = session.beginTransaction();
            session.createQuery("delete from User").executeUpdate();
            transaction.commit();
        }
    }
    /**
     Tests the set() and read() methods of the Interactor class for User objects.
     Creates a new User, sets it using the Interactor set() method, reads it using the Interactor read() method,
     and performs assertions to validate the user data.
     */
    @Test
    public void testSetAndGetUser() {
        User user = new User("username", "user@example.com", "password");
        Interactor.set(user);

        User savedUser = Interactor.read(User.class, user.getUserId());
        assertNotNull(savedUser);
        assertEquals(user.getUsername(), savedUser.getUsername());
        assertEquals(user.getMail(), savedUser.getMail());
        assertEquals(user.getPassword(), savedUser.getPassword());
    }

    /**
     Tests the update() method of the Interactor class for User objects.
     Creates a new User, sets it using the Interactor set() method, reads it using the Interactor read() method,
     updates the password, and reads it again to validate the update.
     */
    @Test
    public void testUpdateUser() {
        User user = new User("username", "user@example.com", "password");
        Interactor.set(user);

        User savedUser = Interactor.read(User.class, user.getUserId());
        assertNotNull(savedUser);

        savedUser.setPassword("newPassword");
        Interactor.update(savedUser);

        User updatedUser = Interactor.read(User.class, savedUser.getUserId());
        assertNotNull(updatedUser);
        assertEquals(savedUser.getPassword(), updatedUser.getPassword());
    }

    /**
     Tests the readByParam() method of the Interactor class for User objects.
     Creates a new User, sets it using the Interactor set() method, and reads it using the Interactor readByParam()
     method with a specific parameter. Validates that the user with the specified parameter is found.
     */
    @Test
    public void testReadByParam() {
        User user = new User("username", "user@example.com", "password");
        Interactor.set(user);

        User foundUser = Interactor.readByParam(User.class, "mail", "user@example.com");
        assertNotNull(foundUser);
        assertEquals(user.getUserId(), foundUser.getUserId());
    }

    /**
     Tests the readAll() method of the Interactor class for User objects.
     Creates multiple User objects, sets them using the Interactor set() method, and reads all users using the
     Interactor readAll() method. Validates that the correct number of users is returned.
     */
    @Test
    public void testReadAllUsers() {
        User user1 = new User("username1", "user1@example.com", "password1");
        User user2 = new User("username2", "user2@example.com", "password2");
        Interactor.set(user1);
        Interactor.set(user2);

        List<User> users = Interactor.readAll(User.class);
        assertEquals(2, users.size());
    }

    /**
     Tests the delete() method of the Interactor class for User objects.
     Creates a new User, sets it using the Interactor set() method, reads it using the Interactor read() method,
     deletes it using the Interactor delete() method, and reads it again to validate that it is deleted.
     */
    @Test
    public void testDeleteUser() {
        User user = new User("username", "user@example.com", "password");
        Interactor.set(user);

        User savedUser = Interactor.read(User.class, user.getUserId());
        assertNotNull(savedUser);

        Interactor.delete(User.class, savedUser.getUserId());

        User deletedUser = Interactor.read(User.class, savedUser.getUserId());
        assertNull(deletedUser);
    }
}