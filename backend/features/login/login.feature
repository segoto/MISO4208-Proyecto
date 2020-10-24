
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
        |           | x_iw0g8yYekyzOq    | Missing username or email.                    |
        | Ofelia_Emmerich20  |          | Missing password.                             |
        | Jackson_Kertzmann  | VpAQ3KffDtmNqIR    | Uh-oh - your email address / username or password is incorrect.  |
| Keith_Cremin  | D50oV9qOz1pTUOe    | Uh-oh - your email address / username or password is incorrect.  |
| Oral25  | WuNa6wVJTayvYeG    | Uh-oh - your email address / username or password is incorrect.  |
| Ari.Shields88  | Y264SPFzcSBckKP    | Uh-oh - your email address / username or password is incorrect.  |
| Ezequiel45  | GfdwOK2_Er1yl19    | Uh-oh - your email address / username or password is incorrect.  |
| Justyn.OConnell  | bVbt9o8_SaTSSJO    | Uh-oh - your email address / username or password is incorrect.  |
| Casper_Hamill62  | g6jJOkprcv3I6cv    | Uh-oh - your email address / username or password is incorrect.  |
| Eloise.MacGyver  | al611pzrl7rDyPt    | Uh-oh - your email address / username or password is incorrect.  |
| Lottie_Schneider32  | o8VcZwMc37PloNK    | Uh-oh - your email address / username or password is incorrect.  |
| Christop.Ferry2  | e_0nRwfL0PiEWpK    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  