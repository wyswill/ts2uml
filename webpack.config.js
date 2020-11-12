/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-11-12 10:42:17
 * @LastEditTime: 2020-11-12 10:43:26
 */
const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "demo", "index"),
  watch: true,
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
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
};
