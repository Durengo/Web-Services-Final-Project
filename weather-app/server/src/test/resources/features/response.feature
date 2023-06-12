Feature: ResponseClass
  Scenario: Creating a ResponseClass instance
    Given the status code is 200
    And the message is "Success"
    And the data is "Some data"
    When a ResponseClass instance is created
    Then the status code should be 200
    And the message should be "Success"
    And the data should be "Some data"