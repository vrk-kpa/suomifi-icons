'use strict';

exports.type = 'perItem';
exports.active = false;
exports.description = 'add classnames based on attributes and values';

exports.params = {
  rules: []
};

/**
 * Add class names based on given attributes and values
 *
 * @param rules:
 *
 * format: [ { attribute: 'attributeName', value: 'attribute-value, className: 'class-name-to-add' } ]
 *
 *
 * example:
 *
 * > Add two different class name based on fill attribute and it's value
 * ---
 * rules: [
 *   {
 *       attribute: 'fill',
 *       value: '#A5ADB1',
 *       className: 'fi-icon-illustrative-base-stroke'
 *   },
 *   {
 *       attribute: 'fill',
 *       value: '#E97025',
 *       className: 'fi-icon-illustrative-highlight-fill'
 *   }
 * ]
 *
 *
 * > Add same class name based on two separate values
 * ---
 * rules: [
 *   {
 *       attribute: 'fill',
 *       value: '#A5ADB1|#A5ADD1',
 *       className: 'fi-icon-illustrative-base-stroke'
 *   }
 * ]
 *
 *
 * @param {Object} item current iteration item
 * @param {Object} params plugin params
 * @return {Boolean} if false, item will be filtered out
 *
 * Based on removeAttrs: https://github.com/svg/svgo/blob/master/plugins/removeAttrs.js
 *
 * @author Sami Korpela
 */
exports.fn = function (item, params) {
  var patternMap = params.rules.map(function (rule) {
    return {
      pattern: [
        new RegExp([rule.attribute].join(''), 'i'),
        new RegExp([rule.value].join(''), 'i')
      ],
      className: rule.className
    };
  });

  patternMap.forEach(function (pm) {
    if (item.attrs) {
      for (const [name, value] of Object.entries(item.attrs)) {
        if (pm.pattern[0].test(name) && pm.pattern[1].test(value.value)) {
          item.class.add(pm.className);
        }
      }
    }
  });
};
