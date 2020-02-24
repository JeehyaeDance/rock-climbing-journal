const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/public"
  },
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
    publicPath: "/public",
    proxy: {
      "/": {
        target: "http://localhost:3001"
      }
    },
    writeToDisk: true
  }
};
