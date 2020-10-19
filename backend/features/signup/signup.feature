Feature: Signup to Habitica
    As a new user
    I want to create an account in Habitica
    in order to start creating my first tasks

Scenario Outline: Registration failed with invalid inputs
    Given I go to Habitica home screen
    When I open the signup screen
    When I fill in <username> and <email> and <password> and <cpassword>
    And I try to signup
    Then I expect to see <error>

    Examples:
        | username  | email | password | cpassword | error                     |
        |           |       |          |           | Missing username. Missing email. Missing password.  |
        |           | andy.donoso1@gmail.com |          |           | Missing username. Missing password.  |
        | jkadjkwah | andy.donoso1@gmail.com | jahjkawhdjhjkhwd | dwdhjd | Password confirmation doesn't match password.  |
        | jkadjkwah | andy.donoso1@gmail.com | jahjkawhdjhjkhwd | jahjkawhdjhjkhwd | Email address is already used in an account.  |

Scenario Outline: Registration can't be submitted because of invalid inputs
    Given I go to Habitica home screen
    When I open the signup screen
    When I fill in <username> and <email> and <password> and <cpassword>
    Then I expect to see <error> below

    Examples:
        | username  | email | password | cpassword | error                     |
        | jkadjkwah | andy.donoso1@gmail.com | jahjkawhdjhjkhwd | kahwdkadhkwaj | Password confirmation doesn't match password.  |
        | jkadjkwah | andy.donoso1@gmail.com | jah | jahjkawhdjhjkhwd | Password must be 8 characters or more.  |

Scenario: Signup successfully
    Given I go to Habitica home screen
    When I open the signup screen
    When I fill in jkadjkwah and af.donoso@uniandes.edu.co and jahjkawhdjhjkhwd and jahjkawhdjhjkhwd
    And I try to signup
    Then I expect to signup successfully