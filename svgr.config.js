const addClassNamesPlugin = require('./add_classnames.svgo-plugin');

module.exports = {
  svgoConfig: {
    plugins: {
      removeViewBox: false,
      removeAttrs: false,
      prefixIds: false,
      addClassNamesPlugin: Object.assign({}, addClassNamesPlugin, {
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
      })
    }
  }
};
