const api = require('./api')
const ui = require('./ui')
const store = require('../store')
store.currentPlayer = 'X'

// onNewGame is the name of the handler for the new game button.
const onNewGame = function () {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// const placePiece = function (square, player) {
//   $(square).text(player)
// }

const onMove = function (event) {
  if (!$(event.target).text()) {
    console.log('test')
    ui.placePiece(event.target)
    store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  }
}

module.exports = {
  onNewGame,
  onMove
}
