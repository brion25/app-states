const getConfig = require('hjs-webpack')

const config = getConfig({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: true
})

module.exports = config
