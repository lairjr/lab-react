module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "./public/index.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  }
};
