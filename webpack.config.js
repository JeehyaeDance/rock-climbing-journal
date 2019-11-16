const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
