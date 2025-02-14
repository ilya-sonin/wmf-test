const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  resolve: {
    alias: {
      '@mf/shared-components': 'mfSharedComponents',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    port: 8082,
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
      name: 'mfMicrofront2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
      },
      remotes: {
        hostPortal: 'hostPortal@http://localhost:8080/remoteEntry.js',
        '@mf/shared-components': 'mfSharedComponents@http://localhost:8083/remoteEntry.js'
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