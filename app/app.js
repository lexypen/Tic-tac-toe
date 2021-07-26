'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  // the line below is the listener for my new game button.
  $('#new-game-button').on('click', gameEvents.onNewGame)
  $('.grid').hide()
  $('.grid').on('click', gameEvents.onMove)
  $('#new-game-button').hide()
})
