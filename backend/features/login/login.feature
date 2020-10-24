
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
        |           | iNcKzHfZEGu5cn1    | Missing username or email.                    |
        | Brandt.Barrows  |          | Missing password.                             |
        | Aron96  | 226GY1tzEcv85GG    | Uh-oh - your email address / username or password is incorrect.  |
| Ethan.Kilback32  | 2lyptpOxiKZYgME    | Uh-oh - your email address / username or password is incorrect.  |
| Earnestine12  | myB_7VnARDIW72Q    | Uh-oh - your email address / username or password is incorrect.  |
| Francesco21  | rQG0Lx1oIzQ4PK3    | Uh-oh - your email address / username or password is incorrect.  |
| Josiah78  | RHw23H7f1l0r9qp    | Uh-oh - your email address / username or password is incorrect.  |
| Aida39  | gO7GIJXQCNZ8lO_    | Uh-oh - your email address / username or password is incorrect.  |
| Edgardo.Schowalter52  | M2ftKNZsfYEdzgg    | Uh-oh - your email address / username or password is incorrect.  |
| Grover_Christiansen97  | 76VKW5gt4smzMDM    | Uh-oh - your email address / username or password is incorrect.  |
| Jany.Little93  | RuLwnPO343F96vr    | Uh-oh - your email address / username or password is incorrect.  |
| Geraldine_MacGyver  | eHkc3rH20Hv625k    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  