const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (webpackEnv) => {
  console.log(webpackEnv)
  const isDevelopment = webpackEnv.NODE_ENV !== 'production'

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'swc-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'public/index.html'),
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  }
}
