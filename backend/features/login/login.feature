
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
        |           | bGRNIPZwYeVZH87    | Missing username or email.                    |
        | Helene.Hickle94  |          | Missing password.                             |
        | Dana_Torphy  | Nwgjt_pPXz9Sgeh    | Uh-oh - your email address / username or password is incorrect.  |
| Olen.Kiehn  | mhSH9OFn81p8xCd    | Uh-oh - your email address / username or password is incorrect.  |
| Jovanny.Kohler19  | NSyzE8bTsB2JqfD    | Uh-oh - your email address / username or password is incorrect.  |
| Jace_Leannon  | 6o9a7Mv1SCmR9OO    | Uh-oh - your email address / username or password is incorrect.  |
| Effie_Weimann86  | GpU8kjDNUQ_Dqcw    | Uh-oh - your email address / username or password is incorrect.  |
| Juliana_Wiegand  | vLizhxmAeAb7lPX    | Uh-oh - your email address / username or password is incorrect.  |
| Merlin57  | NsYK5PnuuSNJYrf    | Uh-oh - your email address / username or password is incorrect.  |
| Quinten86  | 4UKJCgbEGSSoWUK    | Uh-oh - your email address / username or password is incorrect.  |
| Liana_Sporer40  | XezaRESydOnTXd6    | Uh-oh - your email address / username or password is incorrect.  |
| Jess.Koepp  | kyuTqLNE9e1BrBG    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  