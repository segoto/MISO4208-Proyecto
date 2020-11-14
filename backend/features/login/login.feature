
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
        |           | caDNeSTjPkG5JBe    | Missing username or email.                    |
        | Jamaal_Aufderhar46  |          | Missing password.                             |
        | Effie_Krajcik70  | XRy5Vt9ISxHKQow    | Uh-oh - your email address / username or password is incorrect.  |
| Heber_Spinka88  | 8x5Efy9o53BGCsV    | Uh-oh - your email address / username or password is incorrect.  |
| Nelson41  | j3oUoVJypaVtzlR    | Uh-oh - your email address / username or password is incorrect.  |
| Chance83  | d6jOnUnaJ_3XNxH    | Uh-oh - your email address / username or password is incorrect.  |
| Clyde.Schulist  | IiJKW9CP6pwtJ56    | Uh-oh - your email address / username or password is incorrect.  |
| Leon_Adams  | IehJ964lOnnHRxz    | Uh-oh - your email address / username or password is incorrect.  |
| Genesis_Adams11  | pHRbhCPWggkvIpr    | Uh-oh - your email address / username or password is incorrect.  |
| Ricardo_Hoppe  | keJgAmVW3i7_L4W    | Uh-oh - your email address / username or password is incorrect.  |
| Jaclyn44  | eOaoHj9cst_VHJe    | Uh-oh - your email address / username or password is incorrect.  |
| Eloy49  | t4u9n2vacd6eTK7    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  