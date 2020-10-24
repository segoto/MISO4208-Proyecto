const faker = require('faker')

const generateRandomFile = () => {
  let randomUsername = faker.internet.userName()
  let randomPassword = faker.internet.password()

  let randomInputs = ''

  for (let i = 0; i < 10; i++) {
    randomInputs += `| ${faker.internet.userName()}  | ${faker.internet.password()}    | Uh-oh - your email address / username or password is incorrect.  |\n`
  }

  let fileContent = `
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
        |           | ${randomPassword}    | Missing username or email.                    |
        | ${randomUsername}  |          | Missing password.                             |
        ${randomInputs}

Scenario: Login successful with correct inputs
    Given I go to Habitica home screen
    When I open the login screen
    And I fill with andrex491 and jkh2huihr4jr9892bedajd903da.z,89h983jk
    And I try to login
    Then I expect to login successfully
  `

  return fileContent
}

exports.generateRandomFile = generateRandomFile
