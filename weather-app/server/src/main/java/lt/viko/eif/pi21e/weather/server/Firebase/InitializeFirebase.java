package lt.viko.eif.pi21e.weather.server.Firebase;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.FileInputStream;
import java.io.IOException;

public class InitializeFirebase {
    private static final String serviceAccPath = "C:\\Users\\Nazar\\IdeaProjects\\Web-Services-Final-Project\\weather-app" +
            "\\server\\src\\main\\java\\lt\\viko\\eif\\pi21e\\weather\\server\\Firebase\\" +
            "test.json";

    public static FirebaseApp app;
    public static void initialize() {
        FileInputStream serviceAccount;
        try {
            serviceAccount = new FileInputStream(serviceAccPath);

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://test-cf237.firebaseio.com/")
                    .build();

            app = FirebaseApp.initializeApp(options);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

