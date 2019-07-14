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
      },
      {
        test: /\.pug$/,
        include: path.join(__dirname, 'src'),
        use: ["pug-loader"]
      }
    ]
  },
  devServer: {
    compress: true,
    open: true,
    port: 9000,
    //host: //add your ip here to test on other devices
  },
  plugins: [
    new HtmlWebpackPlugin({
      // minify: {
      //     collapseWhitespace: true
      // },
      hash: true,
      template: "./src/index.pug" // Load a custom template (ejs by default see the FAQ for details)
    }),

    new MiniCssExtractPlugin({ filename: "main.css" })
  ]
};
