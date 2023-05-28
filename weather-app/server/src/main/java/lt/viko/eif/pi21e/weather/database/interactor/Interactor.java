package lt.viko.eif.pi21e.weather.database.interactor;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.query.Query;

import java.util.List;
/**
 * This class provides basic CRUD (Create, Read, Update, Delete) operations
 * using the Hibernate library. These operations include getting a session factory,
 * setting, updating, reading, deleting entities, and shutting down the service registry.
 */
public class Interactor {
    private static StandardServiceRegistry registry;
    private static SessionFactory sessionFactory = null;
    /**
     * Constructs a new Interactor with no arguments.
     */
    public Interactor()
    {
    }
    /**
     * Get the Hibernate SessionFactory. If the SessionFactory is null, it tries to build it.
     *
     * @return the SessionFactory for this Interactor.
     */
    public static SessionFactory getSessionFactory(){
        if(sessionFactory == null){
            try{
                registry = new StandardServiceRegistryBuilder().configure().build();
                MetadataSources sources = new MetadataSources(registry);
                Metadata setData = sources.getMetadataBuilder().build();
                sessionFactory = setData.getSessionFactoryBuilder().build();
            }catch (Exception e){
                e.printStackTrace();
                shutdown();
            }
        }
        return sessionFactory;
    }

    /**
     * Save an entity to the database.
     *
     * @param <T> the type of the entity
     * @param entity the entity to be saved
     */
    public static <T> void set(T entity) {
        Transaction transaction = null;
        try (Session session = getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // save the entity object
            session.save(entity);
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    /**
     * Update an entity in the database.
     *
     * @param <T> the type of the entity
     * @param entity the entity to be updated
     */
    public static <T> void update(T entity) {
        Transaction transaction = null;
        try (Session session = getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // Merge the entity object to get a managed instance
            T managedEntity = session.merge(entity);
            // update the entity object using the managed instance
            session.saveOrUpdate(managedEntity);
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    /**
     * Read an entity from the database by its ID.
     *
     * @param <T> the type of the entity
     * @param entityClass the class of the entity
     * @param id the ID of the entity
     * @return the entity found or null if no entity found
     */
    public static <T> T read(Class<T> entityClass, int id) {
        T entity = null;
        try (Session session = getSessionFactory().openSession()) {
            // get the entity object
            entity = session.get(entityClass, id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return entity;
    }

    /**
     * Read an entity from the database by a specific parameter.
     *
     * @param <T> the type of the entity
     * @param entityClass the class of the entity
     * @param param the parameter name
     * @param value the parameter value
     * @return the entity found or null if no entity found
     */
    public static <T> T readByParam(Class<T> entityClass, String param, String value) {
        T entity = null;
        try (Session session = getSessionFactory().openSession()) {
            Query<T> query = session.createQuery("from " + entityClass.getSimpleName()
                    + " o where o."+ param + " = :param", entityClass);
            query.setParameter("param", value);
            query.setMaxResults(1);
            entity = query.uniqueResult();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return entity;
    }

    /**
     * Read all entities of a type from the database.
     *
     * @param <T> the type of the entity
     * @param entityClass the class of the entities
     * @return the list of entities found, or null if no entities found
     */
    public static <T> List<T> readAll(Class<T> entityClass) {
        List<T> entities = null;
        try (Session session = getSessionFactory().openSession()) {
            Query<T> query = session.createQuery("from " + entityClass.getSimpleName(), entityClass);
            entities = query.list();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return entities;
    }

    /**
     * Delete an entity from the database by its ID.
     *
     * @param <T> the type of the entity
     * @param entityClass the class of the entity
     * @param id the ID of the entity
     */
    public static <T> void delete(Class<T> entityClass, int id) {
        Transaction transaction = null;
        try (Session session = getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // get the entity object
            T entity = session.get(entityClass, id);
            // delete the entity object
            if (entity != null) {
                session.delete(entity);
            }
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    /**
     * Delete an entity from the database by a specific parameter.
     *
     * @param <T> the type of the entity
     * @param type the class of the entity
     * @param param the parameter name
     * @param value the parameter value
     */
    public static <T> void deleteByParam(Class<T> type, String param, String value) {
        Transaction transaction = null;
        try (Session session = getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // get the entity object
            Query<T> query = session.createQuery("from " + type.getSimpleName()
                    + " o where o."+ param + " = :param", type);
            query.setParameter("param", value);
            query.setMaxResults(1);
            T entity = query.uniqueResult();
            // delete the entity object
            if (entity != null) {
                session.delete(entity);
            }
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
        }
    }

    /**
     * Shutdown the StandardServiceRegistry.
     */
    public static void shutdown(){
        if(registry != null){
            StandardServiceRegistryBuilder.destroy(registry);
        }
    }
}
