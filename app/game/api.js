'use strict'
const store = require('../store')
const config = require('../config')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    body: '{}'
  })
}

const updateGame = function (number, value, boolean) {
  console.log(number, value, boolean)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      game: {
        cell: {
          index: number,
          value: value
        },
        over: boolean
      }
    }
  })
    .then(response => console.log(response))
    .catch(response => console.log(response))
}

module.exports = {
  newGame,
  updateGame
}
