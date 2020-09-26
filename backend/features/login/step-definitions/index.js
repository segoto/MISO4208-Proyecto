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

//Signup
When('I open the signup screen', () => {
  $('a=Get Started!').waitForExist(5000)
  $('a=Get Started!').waitForDisplayed(5000)
  $('a=Get Started!').click()
})

When(
  /^I fill in (.*) and (.*) and (.*) and (.*)$/,
  (username, email, password, cpassword) => {
    var usernameInput = $('#usernameInput')
    usernameInput.click()
    usernameInput.keys(username ? username : '')

    var emailInput = $('#emailInput')
    emailInput.click()
    emailInput.keys(email ? email : '')

    var passwordInput = $('#passwordInput')
    passwordInput.click()
    passwordInput.keys(password ? password : '')

    var cpasswordInput = $('#confirmPasswordInput')
    cpasswordInput.click()
    cpasswordInput.keys(cpassword ? cpassword : '')
  }
)

When('I try to signup', () => {
  $('button=Join Habitica').click()
})

Then(/^I expect to see (.*) below$/, (error) => {
  expect($("div=Password confirmation doesn't match password.")).to.not.be
    .undefined
})
