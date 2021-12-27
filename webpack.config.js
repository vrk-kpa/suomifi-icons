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
            include: [path.resolve(__dirname, 'src/illustrativeIcons')],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
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
                              className: 'fi-icon-illustrative-base-fill'
                            },
                            {
                              attribute: 'stroke',
                              value: '#A5ADB1',
                              className: 'fi-icon-illustrative-base-stroke'
                            },
                            {
                              attribute: 'fill',
                              value: '#E97025',
                              className: 'fi-icon-illustrative-highlight-fill'
                            },
                            {
                              attribute: 'stroke',
                              value: '#E97025',
                              className: 'fi-icon-illustrative-highlight-stroke'
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
            include: [
              // Component icons rely on having specific id's and classnames. These are used inside suomifi-ui-components library.
              path.resolve(__dirname, 'src/componentIcons')
            ],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    prefixIds: {
                      prefixIds: false,
                      prefixClassNames: false
                    }
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
                              className: 'fi-icon-component-base-fill'
                            },
                            {
                              attribute: 'stroke',
                              value: '#A5ADB1',
                              className: 'fi-icon-component-base-stroke'
                            },
                            {
                              attribute: 'fill',
                              value: '#E97025',
                              className: 'fi-icon-component-highlight-fill'
                            },
                            {
                              attribute: 'stroke',
                              value: '#E97025',
                              className: 'fi-icon-component-highlight-stroke'
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
              icon: true
            }
          },
          {
            include: [path.resolve(__dirname, 'src/baseIcons')],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    addClassNamesPlugin: Object.assign(
                      {},
                      addClassNamesPlugin,
                      {
                        params: {
                          rules: [
                            {
                              attribute: 'fill',
                              value: '#222', // #222222 value in the svg gets shortened previously in the build, which requires the shortened value here as well
                              className: 'fi-icon-base-fill'
                            },
                            {
                              attribute: 'stroke',
                              value: '#222',
                              className: 'fi-icon-base-stroke'
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
            exclude: [
              path.resolve(__dirname, 'src/componentIcons'),
              path.resolve(__dirname, 'src/doctypeIcons'),
              path.resolve(__dirname, 'src/illustrativeIcons'),
              path.resolve(__dirname, 'src/baseIcons')
            ],
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    prefixIds: {
                      prefixIds: false,
                      prefixClassNames: false
                    }
                  }
                ]
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
    library: {
      type: 'commonjs2'
    }
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0
  //   }
  // }
});
