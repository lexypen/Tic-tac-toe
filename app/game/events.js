const api = require('./api')
const ui = require('./ui')

// onNewGame is the name of the handler for the new game button.
const onNewGame = function () {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  onNewGame
}
