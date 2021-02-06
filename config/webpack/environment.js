const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))
console.log('---------------', environment);
module.exports = environment
