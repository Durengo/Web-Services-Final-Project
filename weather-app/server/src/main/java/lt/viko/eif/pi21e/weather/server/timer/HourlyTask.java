package lt.viko.eif.pi21e.weather.server.timer;

import lt.viko.eif.pi21e.weather.server.checker.CheckerClass;
import org.springframework.stereotype.Component;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * This class is responsible for running the hourly task
 * every hour
 */
@Component
public class HourlyTask {
    /**
     * Method that starts the scheduler
     * and runs the hourly task
     */
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

    /**
     * Method that starts the scheduler
     * and runs the hourly task
     */
    public void start() {
        final Runnable task = new Runnable() {
            public void run() {
                CheckerClass.run();
            }
        };
        // schedule the task to run starting now and then every hour...
        final long initialDelay = 0L;
        final long period = 1L;
        scheduler.scheduleAtFixedRate(task, initialDelay, period, TimeUnit.HOURS);
    }
}

