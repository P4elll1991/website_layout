const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const StringReplacePlugin = require("string-replace-webpack-plugin");
const needle = 'return require("jet-views/" + url);'; // Эту строчку необходимо закомментить в jet.js

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const cssloaders = (ext) => {
  const loaders = ["style-loader", "css-loader"];
  if (ext) loaders.push(ext);
  return loaders;
};
console.log("IS DEV: ", isDev);

const filename = (ext) => `./public/dist/[name].[hash].${ext}`;

module.exports = (env, argv) => {
  let webix = argv.mode === "development" ? "webix/webix_debug" : "webix";
  const includes = [
    webix,
    "webix/webix.css",
    "webix/skins/compact.css",
    "webix/i18n/ru",
  ];

  // Точки входа
  const entryPoints = [
    {
      entry: "./source",
      vendors: [...includes],
    },
  ];

  // Сторонние библиотеки (без типов!!! только для компиляции)
  const vendors = ["@babel/polyfill"];

  return {
    entry: () => {
      let entry = {};
      entryPoints.forEach(
        (v) =>
          (entry[v.entry] = [...vendors, ...v.vendors, v.entry + "/index.ts"])
      );
      return entry;
    },
    output: {
      filename: filename("js"),
      path: path.resolve(__dirname),
    },
    resolve: {
      extensions: [".js", ".json", ".ts", ".css", ".less"],
      alias: {
        "@root": path.resolve(__dirname),
      },
    },
    optimization: {
      occurrenceOrder: true,
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    devServer: {
      port: 9000,
      hot: isDev,
    },
    devtool: isDev ? "source-map" : "",
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["./public/dist/*"],
      }),
      new HTMLWebpackPlugin({
        filename: "./app/views/App/index.html",
        template: "./source/Index.html",
        cache: false,
        minify: {
          collapseWhitespace: isProd,
        },
      }),
      new webpack.IgnorePlugin(/jet-locales/),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: cssloaders(),
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          loader: "file-loader",
          options: {
            outputPath: "./public/dist",
          },
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          loader: "file-loader",
          options: {
            outputPath: "./public/dist",
          },
        },
        {
          test: /\.xml$/,
          loader: "xml-loader",
          options: {
            outputPath: "./public/dist",
          },
        },
        {
          test: /\.less$/,
          use: cssloaders("less-loader"),
        },
        {
          test: /\.s[ac]ss$/,
          use: cssloaders("sass-loader"),
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        },
        {
          test: /jet.js$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: needle,
                replacement: () => "// " + needle,
              },
              {
                // Потому что в 50FF не рабит
                pattern: /for\s\(const/g,
                replacement: () => "for (let",
              },
              {
                // Бага webix-jet
                pattern: "!w.$$(test.id)",
                replacement: () => "!w.$$(test.id) && !test.popup",
              },
            ],
          }),
        },
      ],
    },
  };
};
