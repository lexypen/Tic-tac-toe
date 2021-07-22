'use strict'

const store = require('./store')

const onSignUpSuccess = (response) => {
// console.log('Hooray!')
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  console.log(response)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = () => {
// console.log('Failure')
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  console.log('This is the response!', response)
  $('#message').text(`Thank you for signing in ${response.user.email}.`)
  store.token = response.user.token
  store.user = response.user
  console.log('This is store!', store)
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const onSignInFailure = () => {
  // console.log('Failure')
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = () => {
  // console.log('Success')
  $('#message').text('Successfully signed out')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const onSignOutFailure = () => {
  // console.log('Failure')
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
