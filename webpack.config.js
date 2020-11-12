/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-11-12 10:42:17
 * @LastEditTime: 2020-11-12 16:35:49
 */
const path = require("path");
const MyPlugin = require("./src/index");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "demo", "index"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  plugins: [new MyPlugin()],
};
