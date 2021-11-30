const path = require("path")
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is ${mode}`)

  return merge({
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "build"),
      filename: "bundled.js"
    },
    module: {
      rules: [
        {
          test: /\.jpe?g|png$/,
          exclude: /node_modules/,
          use: ["url-loader", "file-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      hot: true,
      open: true
    }
  },
  modeConfig(mode))
}
