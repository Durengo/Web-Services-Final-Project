package lt.viko.eif.pi21e.weather.server.timer;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * SchedulerInit class that starts the scheduler
 * and runs the hourly task
 */
@Component
public class SchedulerInit {
    /**
     * HourlyTask object
     */
    private final HourlyTask hourlyTask;

    /**
     * Constructor for SchedulerInit class
     * @param hourlyTask
     */
    @Autowired
    public SchedulerInit(HourlyTask hourlyTask) {
        this.hourlyTask = hourlyTask;
    }

    /**
     * Method that starts the scheduler
     * and runs the hourly task
     */
    @PostConstruct
    public void init() {
        hourlyTask.start();
    }
}


