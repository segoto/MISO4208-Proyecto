
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
        |           | R79esLP4FnqlzJJ    | Missing username or email.                    |
        | Adaline_Lang64  |          | Missing password.                             |
        | Sadye.Nolan0  | PrBSyMm2avikVnZ    | Uh-oh - your email address / username or password is incorrect.  |
| Terence23  | 31JvmH7mGLyeld7    | Uh-oh - your email address / username or password is incorrect.  |
| Tatum.Christiansen61  | De4s9yMNc1XBf_p    | Uh-oh - your email address / username or password is incorrect.  |
| Leilani_Labadie91  | j_2V4VlHtWdfgbA    | Uh-oh - your email address / username or password is incorrect.  |
| Johnson.Gulgowski25  | 3fEU3jrq8EU0cyv    | Uh-oh - your email address / username or password is incorrect.  |
| Andreanne_Welch  | aQ7FpeLrnWiRl6j    | Uh-oh - your email address / username or password is incorrect.  |
| Boris_Powlowski68  | LJpb08txWIvjCZS    | Uh-oh - your email address / username or password is incorrect.  |
| Zane.Upton20  | wKJYjAlYr0XwWux    | Uh-oh - your email address / username or password is incorrect.  |
| Darian2  | QfAoZHMG_yHr7EI    | Uh-oh - your email address / username or password is incorrect.  |
| Vesta62  | TZcn5m1YUJt37MC    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  