/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-11-12 10:42:17
 * @LastEditTime: 2020-11-12 18:09:17
 */
const path = require("path");
const MyPlugin = require("./src/index");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "demo", "index"),
  module: {
    rules: [
      {
        test: /.js?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /(.png|.jpg)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  plugins: [new MyPlugin()],
};
