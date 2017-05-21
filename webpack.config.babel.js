/**
 * Created by thram on 18/01/17.
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';
export default {
  cache: true,
  entry: {
    'pure-components': `${__dirname}/src/index`,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name]${isProd ? '.min' : ''}.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  externals: {
    glamor: 'glamor',
    lodash: 'lodash',
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('pure-components.css')],
  performance: {
    hints: false,
  },
};
