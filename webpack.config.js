const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: false /* عشان الملفات الغريبه اللي ظهرت في مجلد ال build*/,
    port: 1222,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    } /* عشان لما الملفات اتحذفت من مجلد ال build */,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  module: {
    rules: [
      // Styling
      {
        test: /\.(sass|css|scss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      // images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      // html-loader
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'pyramid.html',
      template: './src/pyramid.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'turkey.html',
      template: './src/turkey.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: './src/register.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html',
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css',
    }),

    new CleanWebpackPlugin(),
  ],
};
