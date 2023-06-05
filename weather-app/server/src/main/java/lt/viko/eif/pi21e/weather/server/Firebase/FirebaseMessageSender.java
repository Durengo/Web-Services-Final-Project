package lt.viko.eif.pi21e.weather.server.Firebase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class FirebaseMessageSender {
    private static FirebaseMessaging firebaseMessaging;

    public FirebaseMessageSender(FirebaseMessaging firebaseMessaging) {
        FirebaseMessageSender.firebaseMessaging = firebaseMessaging;
    }
    public void sendMessage(JsonNode json, String topicName, String messageTitle) {
        ObjectMapper mapper = new ObjectMapper();

        Map<String, String> data = null;
        try {
            data = mapper.readValue(json.toString(), Map.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        // Create message
        Message message = Message.builder()
                .putData("score", "850")
                .putData("time", "2:45")
                .setTopic(topicName)
                .build();

        // Send the message
        String response;

        try {
            response = FirebaseMessaging.getInstance().send(message);
            System.out.println("Successfully sent message: " + response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static FirebaseMessaging getFirebaseMessaging() {
        return firebaseMessaging;
    }

    public static void setFirebaseMessaging(FirebaseMessaging firebaseMessaging) {
        FirebaseMessageSender.firebaseMessaging = firebaseMessaging;
    }

    /*public String send(HttpEntity<String> entity) throws InterruptedException, ExecutionException {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "key=" + FIREBASE_SERVER_KEY);

        HttpEntity<String> request = new HttpEntity<>(entity.getBody(), headers);

        CompletableFuture<String> pushNotification = CompletableFuture.completedFuture(
                restTemplate.postForObject(FIREBASE_API_URL, request, String.class));

        CompletableFuture.allOf(pushNotification).join();

        return pushNotification.get();
    }*/
}




