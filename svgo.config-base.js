const addClassNamesPlugin = require("./add_classnames.svgo-plugin");

module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    {
      name: "addClassNamesPlugin",
      type: "perItem",
      params: {
        rules: [
          {
            attribute: "fill",
            value: "#222", // #222222 value in the svg gets shortened previously in the build, which requires the shortened value here as well
            className: "fi-icon-base-fill",
          },
          {
            attribute: "stroke",
            value: "#222",
            className: "fi-icon-base-stroke",
          },
        ],
      },
      fn: function (item, params) {
        var patternMap = params.rules.map(function (rule) {
          return {
            pattern: [
              new RegExp(["^", rule.attribute, "$"].join(""), "i"),
              new RegExp(["^", rule.value, "$"].join(""), "i"),
            ],
            className: rule.className,
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
      },
    },
  ],
};
