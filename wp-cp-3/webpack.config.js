var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: true,
    port: 9000,
    //host: //add your ip here to test on other devices
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project Demo",
      // minify: {
      //     collapseWhitespace: true
      // },
      hash: true,
      template: "./src/index.html" // Load a custom template (ejs by default see the FAQ for details)
    }),

    new MiniCssExtractPlugin({ filename: "main.css" })
  ]
};
