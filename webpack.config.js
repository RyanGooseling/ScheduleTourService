const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|css)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map'
};

