module.exports = function(options, workspace) {
  var config = workspace.get('webpack').webpackConfig;

  config.module.loaders.push({
    test: /\.css$/,
    loader: 'raw-loader'
  });
};