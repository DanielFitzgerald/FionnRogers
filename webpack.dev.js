const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index/main.js',
    about: './src/about/main.js',
    contacts: './src/contacts/main.js',
    nav: './src/partials/nav/nav.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    writeToDisk: false // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
          // Please note we are not running postcss here
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  stats: { children: false },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index/tmpl.html',
      inject: true,
      chunks: ['index', 'nav'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about/tmpl.html',
      inject: true,
      chunks: ['about', 'nav'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contacts/tmpl.html',
      inject: true,
      chunks: ['contacts', 'nav'],
      filename: 'contacts.html'
    })
  ]
};
