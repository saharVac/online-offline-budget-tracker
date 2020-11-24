// DEPENDENCIES
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

// We need three entry points
const config = {
  entry: {
    // the app gets all of it code from index.js
    app: './assets/js/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // bable loader is needed from es6
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    // This allows it to write out the manifest json file
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Newsy app',
      short_name: 'Newsy',
      description: 'An application that allows you to view different news articles and save your favorites.',
      background_color: '#01579b',
      theme_color: '#ffffff',
      'theme-color': '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('assets/images/icons/icon-192x192.png'),
          sizes: [192, 512],
          destination: path.join('assets', 'images', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;
