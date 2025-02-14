const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8083/',
  },
  devServer: {
    port: 8083,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfSharedComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './ExampleComponent': './src/components/ExampleComponent.vue',
      },
      remotes: {
        hostPortal: 'hostPortal@http://localhost:8080/remoteEntry.js',
      },
      shared: {
        vue: { 
          singleton: true,
          eager: true,
          requiredVersion: '^3.0.0'
        },
        'vue-router': {
          singleton: true,
          eager: true,
          requiredVersion: '^4.0.0'
        },
        'daisyui': {
          singleton: true,
          requiredVersion: '^4.0.0'
        },
        'tailwindcss': {
          singleton: true,
          eager: true,
          requiredVersion: '^3.0.0'
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}; 