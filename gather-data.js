const fs = require('fs')
const getData = require('./lib/get-data')
const commitsUrl = 'https://api.github.com/repos/Alheimsins/alheimsins.net/commits?per_page=10'

getData(commitsUrl)
  .then(data => {
    'use strict'
    fs.writeFileSync('data/commits.json', JSON.stringify(data, null, 2))
    return console.log('data gathered')
  })
  .catch(error => {
    'use strict'
    fs.writeFileSync('data/commits.json', JSON.stringify([], null, 2))
    return console.error(error)
  })
