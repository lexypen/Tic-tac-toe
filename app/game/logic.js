const store = require('../store')
const grid = [
  '', '', '',
  '', '', '',
  '', '', '']

const checkForWin = function () {
  if ((grid[0] === grid[1] && grid[1] === grid[2] && grid[0] !== '') ||
      (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] !== '') ||
      (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] !== '') ||
      (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] !== '') ||
      (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== '') ||
      (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== '') ||
      (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== '') ||
      (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== '')) {
    $('#message').text(`${store.currentPlayer} wins!`)
    for (let i = 0; i < grid.length; i++) {
      if ($('#' + i).text() === '') {
        $('#' + i).text(' ')
      }
    }
    return true
  }
  return false
}

const checkForTie = function () {
  if (grid.every(square => square !== '') && checkForWin() === false) {
    $('#message').text('It\'s a tie!')
    return true
  }
  return false
}

const clearBoard = function () {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = ''
  }
}

module.exports = {
  grid,
  checkForWin,
  checkForTie,
  clearBoard
}
