package lt.viko.eif.pi21e.weather.server.ActiveMQ;

import javax.jms.*;
import org.apache.activemq.ActiveMQConnection;
import org.apache.activemq.ActiveMQConnectionFactory;

public class MessageSender {
    private static String url = ActiveMQConnection.DEFAULT_BROKER_URL;
    private ConnectionFactory connectionFactory;
    private Connection connection;
    private Session session;
    private MessageProducer producer;

    public MessageSender(String queueName) throws JMSException {
        connectionFactory = new ActiveMQConnectionFactory(url);
        connection = connectionFactory.createConnection();
        connection.start();

        session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(queueName);

        producer = session.createProducer(destination);
    }

    public void sendMessage(String text) throws JMSException {
        TextMessage message = session.createTextMessage(text);
        producer.send(message);
        System.out.println("Sent message: " + message.getText());
    }

    public void close() throws JMSException {
        connection.close();
    }
    //example how to use
    /*public static void main(String[] args) throws JMSException {
        MessageSender sender = new MessageSender("TestQueue");
        sender.sendMessage("Hello World!");
        sender.close();
    }*/
}

