@regression
Feature: WebDriverUniversity Login Page

  #Scenario: Login using valid credentials
    #Given I access the WebDriverUniversity Login portal Page
    #When I enter username webdriver
    #And I enter password webdriver123
    #And I click the login button
    #Then I should be presented with the following message validation succeeded

  #Scenario: Login using valid credentials
    #Given I access the WebDriverUniversity Login portal Page
    #When I enter username webdriver555
    #And I enter password webdriver666
    #And I click the login button
    #Then I should be presented with the following message validation failed

  # DDT (Data Driven Test) DRY (Dont Repeat Yourself)
  @login
  Scenario Outline: Test login via WebDriverUniversity login portal
    Given I access the WebDriverUniversity Login portal Page
    When I enter username <username>
    And I enter password <password>
    And I click the login button
    Then I should be presented with the following message <message>

    Examples:
      | username     | password     | message              |
      | webdriver    | webdriver123 | validation succeeded |
      | webdriver555 | webdriver666 | validation failed    |
