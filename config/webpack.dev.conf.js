var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
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
    contentBase: "../dist"
  },
  devtool: "inline-source-maps",
  plugins: [
    new CleanWebpackPlugin("../dist"),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
