const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appDirectory = path.resolve(__dirname);
const { presets, plugins } = require(`${appDirectory}/babel.config.js`);
const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/, // Updated to include .jsx
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, "index.web.js"), // Entry to your application
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "App.tsx"),
    ...compileNodeModules,
  ],
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: "url-loader",
    options: {
      name: "[name].[ext]",
    },
  },
};

const jsonLoaderConfiguration = {
  test: /\.geojson$/,
  type: "json",
};

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  use: [
    {
      loader: "url-loader",
    },
  ],
};

// const tsLoaderConfiguration = {
//   test: /\.(ts)x?$/,
//   exclude: /node_modules|\.d\.ts$/, // this line as well
//   use: {
//     loader: "ts-loader",
//     options: {
//       compilerOptions: {
//         noEmit: false, // this option will solve the issue
//       },
//     },
//   },
// };
const tsLoaderConfiguration = {
  test: /\.(ts|tsx)$/,  // Handle both .ts and .tsx files
  exclude: /node_modules|\.d\.ts$/, // Exclude type declaration files
  use: {
    loader: "ts-loader",
    options: {
      transpileOnly: true,  // Disable type checking in webpack, which can slow down the build
      compilerOptions: {
        noEmit: false, // Ensures that TypeScript emits files during the build
      },
    },
  },
};


module.exports = {
  entry: {
    app: path.join(__dirname, "index.web.js"),
  },
  output: {
    path: path.resolve(appDirectory, "dist"),
    publicPath: "/",
    filename: "rnw.bundle.js",
  },
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.js", ".js"],
    alias: {
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "react-native-svg": "react-native-svg-web",
      "react-native-image-picker": "react-native-web-image-picker", // Alias for web
    },
    
  },
  module: {
    rules: [
      jsonLoaderConfiguration,
      ttfLoaderConfiguration,
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      tsLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    new CopyWebpackPlugin({patterns: [ { from: 'public', to: '' } ]})
  ],
  devServer: {
    client: {
      overlay: false,
    },
    server: {
      // type: 'https',
      type: 'https',
      options: {
        key: fs.readFileSync("server.key"),
        cert: fs.readFileSync("server.crt"),
      }
    },
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: "all",
    open: true,
    hot: true
  },
};
