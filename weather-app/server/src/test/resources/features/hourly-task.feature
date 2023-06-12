Feature: HourlyTask Feature

  Scenario: Start scheduler
    Given the SchedulerInit class is initialized
    When the init() method is called
    Then the HourlyTask should be started