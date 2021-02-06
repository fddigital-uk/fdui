const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: ['./assets/css/main.css', './assets/js/main.js'],
  },
  output: {
    filename: 'js/[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'public/dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                    require('postcss-nesting'),
                    require('autoprefixer')
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
