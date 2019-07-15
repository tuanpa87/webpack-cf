var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");
const glob = require("glob");

const generateHTMLPlugins = () =>
  glob
    .sync("./src/*.pug")
    .map(
      dir =>
        new HtmlWebpackPlugin({
          template: dir,
          filename: path.basename(dir).replace(/\.[^/.]+$/, "") + ".html"
        })
    );

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
        include: path.join(__dirname, "src"),
        use: ["pug-loader"]
      }
    ]
  },
  devServer: {
    compress: true,
    open: true,
    port: 9000
    //host: //add your ip here to test on other devices
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "main.css" }),
    ...generateHTMLPlugins()
  ]
};
