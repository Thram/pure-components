/**
 * Created by thram on 18/01/17.
 */
import { join } from 'path';

const include = join(__dirname, 'src');

const config = {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    filename: `pure-components${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', include },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }, 'sass-loader'],
      },
    ],
  },
};

export default [config, Object.assign({}, config, {
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'PureComponents',
    filename: `pure-components.umd${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
  },
})];
