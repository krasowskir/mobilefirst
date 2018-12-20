var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        use: "url-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist")
  },
  devtool: "inline-source-maps",
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, "../dist")),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
