const slsw = require('serverless-webpack')
const path = require('path')

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [
    /aws-sdk/,
  ],
  // devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [['env', { target: { node: 'current' }, useBuiltIns: true, modules: false, loose: true }], 'stage-0'],
        plugins: [ 'transform-async-to-generator' ]
      },
    }],
  },
}
