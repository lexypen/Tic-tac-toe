'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Thank you for signing in ${response.user.email}.`)
  store.token = response.user.token
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game-button').show()
}

const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Successfully signed out')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.grid').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Failed to sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
