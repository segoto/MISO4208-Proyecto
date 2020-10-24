
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
        |           | _AxgVIZebsnHIgF    | Missing username or email.                    |
        | Ransom_Predovic4  |          | Missing password.                             |
        | Kaitlin13  | E_Pk41Y5qzRD5z3    | Uh-oh - your email address / username or password is incorrect.  |
| Lorenz.Kohler  | lW60Lvx6Mh9GQMT    | Uh-oh - your email address / username or password is incorrect.  |
| Myrtice18  | HDwXq1EiTPiu3CM    | Uh-oh - your email address / username or password is incorrect.  |
| Giovanny_Hegmann  | HuJA7L39OwfGtMT    | Uh-oh - your email address / username or password is incorrect.  |
| Adella19  | 9q_F50I5OHw9xjo    | Uh-oh - your email address / username or password is incorrect.  |
| Alvera_Gaylord  | zljZV6aASqGcBLR    | Uh-oh - your email address / username or password is incorrect.  |
| Barry11  | 9oJFJ1qtyiOvb3T    | Uh-oh - your email address / username or password is incorrect.  |
| Akeem.Goldner40  | zOMriFZ6UizN_6A    | Uh-oh - your email address / username or password is incorrect.  |
| Dora_Hoeger  | rlfLhPTAMT76i96    | Uh-oh - your email address / username or password is incorrect.  |
| Jordan_Ankunding89  | Eb146bSG0I5PEsL    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  