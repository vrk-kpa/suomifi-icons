const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const addClassNamesPlugin = require('./add_classnames.svgo-plugin');

module.exports = (env) => ({
  target: ['web', 'es5'],
  entry: './src/index.tsx',
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'source-map' : 'inline-source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [
      // Run the typescript compilier on .ts files before webpack
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: [
              path.resolve(__dirname, 'src/illustrativeIcons'),
              path.resolve(__dirname, 'src/componentIcons')
            ],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    removeAttrs: false,
                    prefixIds: false
                  },
                  {
                    addClassNamesPlugin: Object.assign(
                      {},
                      addClassNamesPlugin,
                      {
                        params: {
                          rules: [
                            {
                              attribute: 'fill',
                              value: '#A5ADB1',
                              className: 'fi-icon-illustrative-base-stroke'
                            },
                            {
                              attribute: 'fill',
                              value: '#E97025',
                              className: 'fi-icon-illustrative-highlight-fill'
                            }
                          ]
                        }
                      }
                    )
                  }
                ]
              },
              icon: true
            }
          },
          {
            include: [path.resolve(__dirname, 'src/doctypeIcons')],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: { plugins: [{ removeAttrs: false }] },
              icon: true
            }
          },
          {
            exclude: [
              path.resolve(__dirname, 'src/componentIcons'),
              path.resolve(__dirname, 'src/doctypeIcons'),
              path.resolve(__dirname, 'src/illustrativeIcons')
            ],
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
});
