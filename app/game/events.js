const api = require('./api')
const ui = require('./ui')

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
  console.log(event)
  console.log(event.target)
  const targetData = event.target
  ui.placePiece(targetData.id, 'X')
}

module.exports = {
  onNewGame,
  onMove
}
