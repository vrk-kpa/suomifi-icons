const addClassNamesPlugin = require('./add_classnames.svgo-plugin');

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    }
  ]
};
