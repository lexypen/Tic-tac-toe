const api = require('./api')
const ui = require('./ui')
const store = require('../store')
store.currentPlayer = 'X'
const logic = require('./logic')

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
  console.log(event.target)
  if (!$(event.target).text()) {
    ui.placePiece(event.target)

    const index = $(event.target).data('index')

    logic.grid[index] = store.currentPlayer

    const gameOver = (logic.checkForWin() || logic.checkForTie())

    api.updateGame(index, store.currentPlayer, gameOver)
    store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  }
}

module.exports = {
  onNewGame,
  onMove
}
