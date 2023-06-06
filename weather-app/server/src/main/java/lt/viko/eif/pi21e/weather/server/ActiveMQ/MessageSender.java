package lt.viko.eif.pi21e.weather.server.ActiveMQ;

import javax.jms.*;
import org.apache.activemq.ActiveMQConnection;
import org.apache.activemq.ActiveMQConnectionFactory;

/**
 * Class that sends messages to the ActiveMQ
 */
public class MessageSender {
    /**
     * Represents the url of the ActiveMQ
     */
    private static String url = ActiveMQConnection.DEFAULT_BROKER_URL;
    /**
     * Represents the connection factory
     */
    private ConnectionFactory connectionFactory;
    /**
     * Represents the connection
     */
    private Connection connection;
    /**
     * Represents the session
     */
    private Session session;
    /**
     * Represents the producer
     */
    private MessageProducer producer;
    /**
     * Constructor
     * @param queueName the name of the queue
     * @throws JMSException
     */

    public MessageSender(String queueName) throws JMSException {
        connectionFactory = new ActiveMQConnectionFactory(url);
        connection = connectionFactory.createConnection();
        connection.start();

        session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(queueName);

        producer = session.createProducer(destination);
    }
    /**
     * Sends a message to the ActiveMQ
     * @param text the text of the message
     * @throws JMSException
     */
    public void sendMessage(String text) throws JMSException {
        TextMessage message = session.createTextMessage(text);
        producer.send(message);
        System.out.println("Sent message: " + message.getText());
    }
    /**
     * Closes the connection
     * @throws JMSException
     */
    public void close() throws JMSException {
        connection.close();
    }
}

