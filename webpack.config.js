const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // Run the typescript compilier on .ts files before webpack
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader?configFileName=./tsconfig.json',
        exclude: [/node_modules/]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: [path.resolve(__dirname, 'src/staticIcons')],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: { plugins: [{ removeAttrs: false }] },
              icon: true
            }
          },
          {
            exclude: [path.resolve(__dirname, 'src/staticIcons')],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [{ removeAttrs: { attrs: '(fill|stroke)' } }]
              },
              icon: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    // filename: '[name].js',
    // publicPath: '/static/',
    // chunkFilename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0
  //   }
  // }
};
