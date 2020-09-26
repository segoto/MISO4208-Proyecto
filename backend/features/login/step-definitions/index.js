const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('I go to Habitica home screen', () => {
  browser.url('/')
})

When('I open the login screen', () => {
  $('a=Login').waitForExist(5000)
  $('a=Login').waitForDisplayed(5000)
  $('a=Login').click()
})

When(/^I fill with (.*) and (.*)$/, (username, password) => {
  var usernameInput = $('#usernameInput')
  usernameInput.click()
  usernameInput.keys(username ? username : '')

  var passwordInput = $('#passwordInput')
  passwordInput.click()
  passwordInput.keys(password ? password : '')
})

When('I try to login', () => {
  $('button=Login').click()
})

Then(/^I expect to see (.*)$/, (error) => {
  $('.notification.callout.animated.pt-0.error.positive').waitForDisplayed(5000)
  var alertText = browser
    .$('.notification.callout.animated.pt-0.error.positive')
    .getText()
  expect(alertText).to.include(error)
})

Then('I expect to login successfully', () => {
  $('.character-name').waitForExist(5000)
  $('.character-name').waitForDisplayed(5000)
  var characterName = $('.character-name').getText()
  expect(characterName).to.include('andrex491')
})
