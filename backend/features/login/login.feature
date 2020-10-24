
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
        |           | o2CbPpy13mXHWzl    | Missing username or email.                    |
        | Diana.Feest  |          | Missing password.                             |
        | Anastasia.Jakubowski18  | 7mXUkHrUl8l6WUk    | Uh-oh - your email address / username or password is incorrect.  |
| Emmitt_Strosin7  | Ez5KJS7tl8mwmkM    | Uh-oh - your email address / username or password is incorrect.  |
| Granville.Graham  | E2sABY7p9OyS79u    | Uh-oh - your email address / username or password is incorrect.  |
| Alejandrin.Cruickshank  | bHD0kAJusBs3MRi    | Uh-oh - your email address / username or password is incorrect.  |
| Baron59  | aBCWx8k4XPNAfoP    | Uh-oh - your email address / username or password is incorrect.  |
| Duane.Nader  | fMW0s2X_8n1d_ge    | Uh-oh - your email address / username or password is incorrect.  |
| Alison.Hane  | Siezc6JUuZ7aj1V    | Uh-oh - your email address / username or password is incorrect.  |
| Mekhi.Kuvalis  | d0Uqov5zUAL5wqs    | Uh-oh - your email address / username or password is incorrect.  |
| Noelia.Runolfsdottir  | h5tNKcFdPnQik5Z    | Uh-oh - your email address / username or password is incorrect.  |
| Claire10  | PRxw8NBe_BjHPc1    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  