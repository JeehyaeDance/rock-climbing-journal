const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Climbing Day",
      template: "./client/index.html"
    })
  ],
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "./client/src/style"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/": {
        target: "http://localhost:3001"
      }
    },
    writeToDisk: true
  }
};
