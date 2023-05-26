package lt.viko.eif.pi21e.weather.server.rest.responses;

public class ResponseClass {
    private int status;
    private String message;
    private String data;

    public ResponseClass(int status, String message, String data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public ResponseClass(){
    }


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
