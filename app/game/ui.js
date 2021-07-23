'use strict'

const store = require('../store')

const onNewGameSuccess = (response) => {
  console.log(response)
  store.gameid = response.game._id
  console.log(store.id)
}

const onNewGameFailure = (response) => {
  console.log(response)
}

const placePiece = function (square, player) {
  $(`#${square}`).text(player)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  placePiece
}
