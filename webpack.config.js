module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
