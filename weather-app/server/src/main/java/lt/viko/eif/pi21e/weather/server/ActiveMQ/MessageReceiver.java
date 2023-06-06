package lt.viko.eif.pi21e.weather.server.ActiveMQ;

import javax.jms.*;
import org.apache.activemq.ActiveMQConnection;
import org.apache.activemq.ActiveMQConnectionFactory;

import java.util.ArrayList;
import java.util.List;

public class MessageReceiver {
    private static String url = ActiveMQConnection.DEFAULT_BROKER_URL;
    private ConnectionFactory connectionFactory;
    private Connection connection;
    private Session session;
    private MessageConsumer consumer;

    public MessageReceiver(String queueName) throws JMSException {
        connectionFactory = new ActiveMQConnectionFactory(url);
        connection = connectionFactory.createConnection();
        connection.start();

        session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(queueName);

        consumer = session.createConsumer(destination);
    }

    public void receiveMessage() throws JMSException {
        Message message = consumer.receive();

        if (message instanceof TextMessage) {
            TextMessage textMessage = (TextMessage) message;
            System.out.println("Received message: " + textMessage.getText());
        }
    }

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


    public void close() throws JMSException {
        connection.close();
    }

    /*public static void main(String[] args) throws JMSException {
        MessageReceiver receiver = new MessageReceiver("-1");
        receiver.receiveMessage();
        receiver.close();
    }*/
}


