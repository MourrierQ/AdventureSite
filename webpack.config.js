var webpack = require('webpack');
var path = require('path');

module.exports={
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.join(__dirname,'app','temp','scripts'),
    filename: "[name].js"
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
