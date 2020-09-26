Feature: Login into Habitica
    As a user
    I want to login into Habitica
    in order to see my tasks

Scenario Outline: Login failed with wrong inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with <username> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
        | username  | password | error                                         |
        |           |          | Missing username or email. Missing password.  |
        |           | 12345    | Missing username or email.                    |
        | ahwdhad   |          | Missing password.                             |
        | ahwedhad  | 12345    | Uh-oh - your email address / username or password is incorrect.  |

Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully