'use strict'

const store = require('../store')
const logic = require('./logic')

const onNewGameSuccess = (response) => {
  store.gameId = response.game._id
  clearBoard()
  store.currentPlayer = 'X'
  logic.clearBoard()
  $('#grid').show()
  $('#message').text(' ')
}

const clearBoard = () => {
  $('.square').each(function () {
    $(this).text('')
  })
}

const onNewGameFailure = (response) => {
  console.log(response)
}

const placePiece = function (square) {
  $(square).text(store.currentPlayer)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  placePiece
}
