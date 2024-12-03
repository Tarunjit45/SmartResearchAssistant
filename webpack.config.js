const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',  // Your background script
    popup: './src/popup.js',            // Your popup script
    content: './src/content.js'         // Add content.js as an entry
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  plugins: [
    // Add your plugins (e.g., copy-webpack-plugin) if needed
  ],
};
