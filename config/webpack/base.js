const { webpackConfig, merge } = require('@rails/webpacker')
const customConfig = require('./custom')
console.log('===============', webpackConfig, customConfig);
module.exports = merge(webpackConfig, customConfig)
