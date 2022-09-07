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
    // Object.assign({}, addClassNamesPlugin, {
    //   name: "addClassNamesPlugin",
    //   params: {
    //     rules: [
    //       {
    //         attribute: "fill",
    //         value: "#A5ADB1",
    //         className: "fi-icon-illustrative-base-fill",
    //       },
    //       {
    //         attribute: "stroke",
    //         value: "#A5ADB1",
    //         className: "fi-icon-illustrative-base-stroke",
    //       },
    //       {
    //         attribute: "fill",
    //         value: "#E97025",
    //         className: "fi-icon-illustrative-highlight-fill",
    //       },
    //       {
    //         attribute: "stroke",
    //         value: "#E97025",
    //         className: "fi-icon-illustrative-highlight-stroke",
    //       },
    //     ],
    //   },
    // }),
    {
      name: "addClassNamesPlugin",
      type: "perItem",
      params: {
        rules: [
          {
            attribute: "fill",
            value: "#A5ADB1",
            className: "fi-icon-illustrative-base-fill",
          },
          {
            attribute: "stroke",
            value: "#A5ADB1",
            className: "fi-icon-illustrative-base-stroke",
          },
          {
            attribute: "fill",
            value: "#E97025",
            className: "fi-icon-illustrative-highlight-fill",
          },
          {
            attribute: "stroke",
            value: "#E97025",
            className: "fi-icon-illustrative-highlight-stroke",
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
