const webpack = require('webpack');
const ignore = new webpack.IgnorePlugin(/\.svg$/);

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      './scripts/index.js',
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
    ],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '/js/[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']})], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      { test: /\.(png|jpg|ico)$/, loader: 'url?limit=8192' },
    ],
  },
  plugins: [ignore]
};
