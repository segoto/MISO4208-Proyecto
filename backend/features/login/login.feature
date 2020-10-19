
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
        |           | wKpkLrQ9NXxzm3Q    | Missing username or email.                    |
        | Ashly.Bailey  |          | Missing password.                             |
        | Drake_Schaefer69  | UnezAGdQXUyhtf4    | Uh-oh - your email address / username or password is incorrect.  |
| Andrew.Beatty38  | qSTwPxHknlwZtmF    | Uh-oh - your email address / username or password is incorrect.  |
| Mayra94  | A_t12OMlH9zj3A7    | Uh-oh - your email address / username or password is incorrect.  |
| Hans68  | 2cpD4nsu8Ffu7_H    | Uh-oh - your email address / username or password is incorrect.  |
| Lilian_Cartwright3  | 9EvI88fwcDBSPkx    | Uh-oh - your email address / username or password is incorrect.  |
| Dianna_Rempel  | KdZXBIdSUx9uWRA    | Uh-oh - your email address / username or password is incorrect.  |
| Braeden.Abshire56  | exJQWCZLXknA9h6    | Uh-oh - your email address / username or password is incorrect.  |
| Aaliyah.Shanahan22  | oPRe5rktlU17Jdc    | Uh-oh - your email address / username or password is incorrect.  |
| Earlene.Adams  | IIOiOD6oSD3r4jD    | Uh-oh - your email address / username or password is incorrect.  |
| Luella.Casper  | hb86l9c7xQNKwYx    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  