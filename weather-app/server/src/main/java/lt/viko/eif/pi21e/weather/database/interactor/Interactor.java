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

public class Interactor {
    private static StandardServiceRegistry registry;
    private static SessionFactory sessionFactory = null;

    public Interactor()
    {
    }

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

    public static <T> void update(T entity) {
        Transaction transaction = null;
        try (Session session = getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // update the entity object
            session.saveOrUpdate(entity);
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

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

    public static void shutdown(){
        if(registry != null){
            StandardServiceRegistryBuilder.destroy(registry);
        }
    }
}
