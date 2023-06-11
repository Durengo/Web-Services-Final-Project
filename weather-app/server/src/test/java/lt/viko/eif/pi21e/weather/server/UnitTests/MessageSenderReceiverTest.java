package lt.viko.eif.pi21e.weather.server.UnitTests;

import lt.viko.eif.pi21e.weather.server.ActiveMQ.MessageReceiver;
import lt.viko.eif.pi21e.weather.server.ActiveMQ.MessageSender;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import javax.jms.JMSException;
import java.util.List;
import java.util.ArrayList;
import static org.junit.Assert.assertEquals;

/**
 * Unit tests for the MessageSender and MessageReceiver classes.
 */
public class MessageSenderReceiverTest {
    private static String queueName = "test.queue";
    private MessageSender messageSender;
    private MessageReceiver messageReceiver;

    /**
     * Sets up the test environment before each test case.
     * Initializes the MessageSender and MessageReceiver instances.
     *
     * @throws JMSException if an error occurs while setting up the JMS connection
     */
    @Before
    public void setUp() throws JMSException {
        messageSender = new MessageSender(queueName);
        messageReceiver = new MessageReceiver(queueName);
    }

    /**
     * Cleans up the test environment after each test case.
     * Closes the MessageSender and MessageReceiver instances.
     *
     * @throws JMSException if an error occurs while closing the JMS connection
     */
    @After
    public void tearDown() throws JMSException {
        messageSender.close();
        messageReceiver.close();
    }

    /**
     * Tests the receiveAllMessages() method of the MessageReceiver class.
     * Sends a list of expected messages using the MessageSender and verifies
     * that the received messages match the expected messages.
     *
     * @throws JMSException if an error occurs while sending or receiving messages
     */
    @Test
    public void testReceiveAllMessages() throws JMSException {
        List<String> expectedMessages = new ArrayList<>();
        expectedMessages.add("Message 1");
        expectedMessages.add("Message 2");
        expectedMessages.add("Message 3");

        for (String message : expectedMessages) {
            messageSender.sendMessage(message);
        }

        List<String> receivedMessages = messageReceiver.receiveAllMessages();
        assertEquals(expectedMessages, receivedMessages);
    }
}