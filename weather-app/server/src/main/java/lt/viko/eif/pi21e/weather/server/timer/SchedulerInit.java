package lt.viko.eif.pi21e.weather.server.timer;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class SchedulerInit {
    private final HourlyTask hourlyTask;

    @Autowired
    public SchedulerInit(HourlyTask hourlyTask) {
        this.hourlyTask = hourlyTask;
    }

    @PostConstruct
    public void init() {
        hourlyTask.start();
    }
}


