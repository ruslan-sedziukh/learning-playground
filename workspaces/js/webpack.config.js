const path = require('path');

module.exports = {
  entry: './src/index.ts', // replace with the main file of your project
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@tasks': path.resolve(__dirname, './src/tasks')
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
