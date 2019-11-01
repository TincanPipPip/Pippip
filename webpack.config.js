/* global module __dirname require */

const webpack = require('webpack'),
  path = require('path'),
  copyWebpackPlugin = require('copy-webpack-plugin'),
  imageminPlugin = require('imagemin-webpack-plugin').default,
  browserSyncPlugin = require('browser-sync-webpack-plugin'),
  miniCssExtractPlugin = require('mini-css-extract-plugin'),
  proxy = 'pippip.localhost',
  entry = require('webpack-glob-entry'),
  defaultPlugins = [
    new copyWebpackPlugin([{ from: 'assets/img', to: 'img' }, { from: 'assets/icon', to: 'icon' }, { from: 'assets/font', to: 'font' }]),
    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
  ];

module.exports = (env, argv) => {
  const mode = argv.mode ? argv.mode : 'production';
  const isProduction = mode === 'production';

  return {
    entry: {
      '/js/modernizr.js': './assets/js/modernizr.js',
      '/js/defaults.js': './assets/js/defaults.js',
      '/js/defaults.js': './assets/js/emmsg.js',
      '/js/defaults.js': './assets/js/global.js',
      'css/global.css': './assets/sass/global.scss',
    },
    output: {
      publicPath: 'dist',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]',
    },
    stats: 'errors-warnings',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            miniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          loader: 'modernizr-loader',
          test: /\.modernizrrc\.js$/,
        },
      ],
    },
    resolve: {
      alias: {
        modernizr$: path.resolve(__dirname, '.modernizrrc.js'),
        swiper$: 'swiper/dist/js/swiper.js',
      },
    },
    plugins: isProduction
      ? [
          ...defaultPlugins,
          new imageminPlugin({
            test: /\.(svg)$/i,
            svgo: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          }),
          new imageminPlugin({
            test: /\.(jpe?g|png|svg)$/i,
            svgo: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
            pngquant: {
              quality: '70-90',
              dithering: 0,
              speed: 1,
            },
            jpegtran: {
              progressive: true,
              quality: 60,
            },
          }),
        ]
      : [
          ...defaultPlugins,
          new browserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: `https://${proxy}`,
          }),
        ],
  };
};