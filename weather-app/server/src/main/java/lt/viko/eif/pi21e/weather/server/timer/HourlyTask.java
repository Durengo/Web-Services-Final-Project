package lt.viko.eif.pi21e.weather.server.timer;

import jakarta.annotation.PostConstruct;
import lt.viko.eif.pi21e.weather.server.checker.CheckerClass;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

@Component
public class HourlyTask {
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    public void start() {
        final Runnable task = new Runnable() {
            public void run() {
                CheckerClass.run();
            }
        };
        // schedule the task to run starting now and then every hour...
        final long initialDelay = 0L;
        final long period = 1L;
        scheduler.scheduleAtFixedRate(task, initialDelay, 10, TimeUnit.SECONDS);
    }
}

