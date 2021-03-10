const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    // new ImageMinimizerPlugin({
    //   minimizerOptions: {
    //     // Lossless optimization with custom option
    //     // Feel free to experiment with options for better result for you
    //     plugins: [
    //       ['gifsicle', { interlaced: true }],
    //       ['jpegtran', { progressive: true }],
    //       ['optipng', { optimizationLevel: 5 }],
    //       [
    //         'svgo',
    //         {
    //           plugins: [
    //             {
    //               removeViewBox: false,
    //             },
    //           ],
    //         },
    //       ],
    //     ],
    //   },
    // }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      title: 'Custom template',
      template: path.resolve(__dirname, 'index.html'),
      // filename: path.resolve(__dirname, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|webp)$/i,
        include: [
          path.resolve(__dirname, 'src', 'assets'),
        ],
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@Assets': path.resolve(__dirname, 'src/assets/'),
      '@UI': path.resolve(__dirname, 'src/components/ui/'),
      '@Store': path.resolve(__dirname, 'src/store/'),
    }
  }
};

module.exports = config;