var webpack = require('webpack');
var path = require('path');

module.exports={
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.join(__dirname,'app','temp','scripts'),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  }
}
