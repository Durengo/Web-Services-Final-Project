package lt.viko.eif.pi21e.weather.server.ActiveMQ;

import javax.jms.*;
import org.apache.activemq.ActiveMQConnection;
import org.apache.activemq.ActiveMQConnectionFactory;

import java.util.ArrayList;
import java.util.List;
/**
 * Class that receives messages from the ActiveMQ
 */
public class MessageReceiver {
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
     * Represents the consumer
     */
    private MessageConsumer consumer;
    /**
     * Constructor
     * @param queueName the name of the queue
     * @throws JMSException
     */

    public MessageReceiver(String queueName) throws JMSException {
        connectionFactory = new ActiveMQConnectionFactory(url);
        connection = connectionFactory.createConnection();
        connection.start();

        session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(queueName);

        consumer = session.createConsumer(destination);
    }
    /**
     * Receives a message from the ActiveMQ
     * @throws JMSException
     */
    public void receiveMessage() throws JMSException {
        Message message = consumer.receive();

        if (message instanceof TextMessage) {
            TextMessage textMessage = (TextMessage) message;
            System.out.println("Received message: " + textMessage.getText());
        }
    }
    /**
     * Receives all messages from the ActiveMQ
     * @throws JMSException
     */
    public List<String> receiveAllMessages() throws JMSException {
        List<String> messages = new ArrayList<>();
        Message message;
        while (true) {
            message = consumer.receive(1000);
            if (message != null) {
                if (message instanceof TextMessage) {
                    TextMessage textMessage = (TextMessage) message;
                    messages.add(textMessage.getText());
                    System.out.println("Received message: " + textMessage.getText());
                }
            } else {
                break;  // break the loop if no message is received within the timeout
            }
        }
        return messages;
    }

    /**
     * Closes the connection
     * @throws JMSException
     */
    public void close() throws JMSException {
        connection.close();
    }
}


