const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  target: "web",
  mode: "production",
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          type: "css/mini-extract",
          name: "styles",
          chunks: "all",
          enforce: true,
        },
      },
    },
    // runtimeChunk: "single",
  },
  entry: {
    main: path.resolve(__dirname, "src/main.ts"),
    loader: path.resolve(__dirname, "src/ts/event/loadFromSaveFile.ts"),
    // settings: "./src/js/settings.js",
    styles: [
      path.resolve(__dirname, "./src/css/default.css"),
      path.resolve(__dirname, "./src/css/buttons.css"),
      path.resolve(__dirname, "./src/css/colors.css"),
      path.resolve(__dirname, "./src/css/box.css"),
      path.resolve(__dirname, "./src/css/index.css"),
      path.resolve(__dirname, "./src/css/icons.css"),
      path.resolve(__dirname, "./src/css/input.css"),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"],
      template: "src/index.html",
      hash: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "img"),
          to({ context, absoluteFilename }) {
            return "img/[name][ext]";
          },
        },
        {
          from: path.resolve(__dirname, "src", "html"),
          to({ context, absoluteFilename }) {
            return "html/[name][ext]";
          },
        },
        {
          from: path.resolve(__dirname, "src", "favicon.ico"),
          to({ context, absoluteFilename }) {
            return "[name][ext]";
          },
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "[name]-bundle.css",
    }),
    new IgnoreEmitPlugin(["styles.bundle.js"]),
    new NodePolyfillPlugin({
      includeAliases: ["Buffer", "stream", "crypto"],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};