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
  devtool: isProd ? 'eval' : 'source-map',
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
              compact: isProd,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { modules: true, sourceMap: isProd },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isProd },
            },
          ],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('pure-components.css')],
  performance: {
    hints: false,
  },
};
