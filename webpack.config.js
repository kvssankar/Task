const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true,
    })
  ],
};
