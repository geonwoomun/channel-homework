const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: {
    main: './src/index.jsx'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: ['web', 'es5'],
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_moduels/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ]
});
