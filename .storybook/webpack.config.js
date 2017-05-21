const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (storybookBaseConfig, configType) =>
  Object.assign({}, storybookBaseConfig, {
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
          exclude: [`${__dirname}/node_modules/`],
          include: path.resolve(__dirname, '../'),
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?modules', 'sass-loader'],
          }),
          include: path.resolve(__dirname, '../'),
        },
      ],
    },
    plugins: (storybookBaseConfig.plugins || [])
      .concat(new ExtractTextPlugin('pure-components.css')),
  });
