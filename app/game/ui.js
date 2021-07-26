'use strict'

const store = require('../store')

const onNewGameSuccess = (response) => {
  console.log(response)
  store.gameid = response.game._id
  console.log(store.gameid)
  clearBoard()
  store.currentPlayer = 'X'
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
