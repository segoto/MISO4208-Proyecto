
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
        |           | JRfoG2s7Qx9vebu    | Missing username or email.                    |
        | Adriel_Hudson90  |          | Missing password.                             |
        | Jayson.Jast93  | N_qBmWMy7Luwnl7    | Uh-oh - your email address / username or password is incorrect.  |
| Shanna_Kunze10  | jiLSaRnAB8RcMv9    | Uh-oh - your email address / username or password is incorrect.  |
| Meghan58  | DNnEiGaxMttIaj9    | Uh-oh - your email address / username or password is incorrect.  |
| Milford.Yundt65  | 0qSJImVAQo5elXc    | Uh-oh - your email address / username or password is incorrect.  |
| Ethelyn_Treutel91  | TiMcrhczsjyuhs8    | Uh-oh - your email address / username or password is incorrect.  |
| Brian.Conroy57  | 8qu7gpR8hZhTmtQ    | Uh-oh - your email address / username or password is incorrect.  |
| Elmo45  | 9diswBRCf4gPwNo    | Uh-oh - your email address / username or password is incorrect.  |
| Regan89  | NbjRgWIXUjv7fFq    | Uh-oh - your email address / username or password is incorrect.  |
| Eliane15  | onvMkRBr8ZMPbNB    | Uh-oh - your email address / username or password is incorrect.  |
| Kristopher.Lubowitz39  | mhNwh1n6RygIQh3    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  