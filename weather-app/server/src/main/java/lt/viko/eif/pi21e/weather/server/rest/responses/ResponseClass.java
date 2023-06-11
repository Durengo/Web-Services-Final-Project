package lt.viko.eif.pi21e.weather.server.rest.responses;
/**
 * This class encapsulates the response to be returned by the server.
 */
public class ResponseClass {
    /**
     * The status code of the response
     */
    private int status;
    /**
     * The message of the response
     */
    private String message;
    /**
     * The data of the response
     */
    private String data;
    /**
     * Constructor for ResponseClass.
     *
     * @param status the status code
     * @param message the message
     * @param data the data
     */
    public ResponseClass(int status, String message, String data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    /**
     * Default constructor for ResponseClass.
     */
    public ResponseClass(){
    }

    /**
     * Retrieves the status.
     *
     * @return the status
     */
    public int getStatus() {
        return status;
    }
    /**
     * Sets the status.
     *
     * @param status the status
     */
    public void setStatus(int status) {
        this.status = status;
    }
    /**
     * Retrieves the message.
     *
     * @return the message
     */
    public String getMessage() {
        return message;
    }
    /**
     * Sets the message.
     *
     * @param message the message
     */
    public void setMessage(String message) {
        this.message = message;
    }
    /**
     * Retrieves the data.
     *
     * @return the data
     */
    public String getData() {
        return data;
    }
    /**
     * Sets the data.
     *
     * @param data the data
     */
    public void setData(String data) {
        this.data = data;
    }
}
