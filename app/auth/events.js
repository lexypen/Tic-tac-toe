'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Hello')
  // Get information from event and form
  const form = event.target
  // console.log(form)
  const data = getFormFields(form)
  // console.log(data)
  // Make an API call using AJAX
  api.signUp(data)
  // Handle successful API calls with .then
    .then(ui.onSignUpSuccess)
  // Handle failed API calls with .catch
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Hello')
  // Get information from event and form
  const form = event.target
  // console.log(form)
  const data = getFormFields(form)
  // console.log(data)
  // Make an API call using AJAX
  api.signIn(data)

  // Handle successful API calls with .then
    .then(ui.onSignInSuccess)
  // Handle failed API calls with .catch
    .catch(ui.onSignInFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
