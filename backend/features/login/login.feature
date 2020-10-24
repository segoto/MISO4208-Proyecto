
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
        |           | hySm0ywTmOrFZIs    | Missing username or email.                    |
        | Ulices.Thompson71  |          | Missing password.                             |
        | Presley_Dach  | 4aji1eAGwYFkjZl    | Uh-oh - your email address / username or password is incorrect.  |
| Elenora_Oberbrunner  | 49u_I9TyutIF5Ru    | Uh-oh - your email address / username or password is incorrect.  |
| Lonny.Pagac69  | oHsQ2_7Vxx7tRyX    | Uh-oh - your email address / username or password is incorrect.  |
| Sabryna32  | Juls42B67lKqMl_    | Uh-oh - your email address / username or password is incorrect.  |
| Heidi_Schaefer87  | bb_Z4OdjIQlEskH    | Uh-oh - your email address / username or password is incorrect.  |
| Kiana_Fahey30  | aG88kOQunNqyKeK    | Uh-oh - your email address / username or password is incorrect.  |
| Angelica45  | Rjid2FbmxJSGHHe    | Uh-oh - your email address / username or password is incorrect.  |
| Odie_Olson66  | 9q3dUQNoTqqdZS9    | Uh-oh - your email address / username or password is incorrect.  |
| Santiago_Lynch  | jn99xxFv__C9LH1    | Uh-oh - your email address / username or password is incorrect.  |
| Eleanore.Huel15  | pEM6Vgt6SPOA0wG    | Uh-oh - your email address / username or password is incorrect.  |


Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  