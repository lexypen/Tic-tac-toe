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

module.exports = {
  newGame
}
