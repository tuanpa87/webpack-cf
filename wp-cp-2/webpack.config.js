const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    //publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ],
        exclude: path.resolve(__dirname, "src/index.html")
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
