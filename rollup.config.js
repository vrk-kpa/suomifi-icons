import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";
const illustrativeConfig = require("./svgo.config-illustrative.js");
const baseConfig = require("./svgo.config-base.js");
const componentConfig = require("./svgo.config-component.js");
const defaultConfig = require("./svgo.config-default.js");

const iconTypes = ["base", "illustrative", "component"]; // add doctype and logo

const resolveConfig = (iconType) => {
  switch (iconType) {
    case "base":
      return baseConfig;
    case "illustrative":
      return illustrativeConfig;
    case "component":
      return componentConfig;
    default:
      return defaultConfig;
  }
};

const buildIcons = (iconType) => {
  return {
    input: `src/${iconType}Icons/index.ts`,
    output: {
      dir: `dist/${iconType}Icons`,
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      svgr({
        typescript: true,
        icon: true,
        svgoConfig: resolveConfig(iconType),
      }),
    ],
  };
};

export default [
  buildIcons("base"),
  buildIcons("illustrative"),
  buildIcons("component"),
  buildIcons("logo"),
  buildIcons("doctype"),
];
