import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
const illustrativeConfig = require('./svgo.config-illustrative.js');
const baseConfig = require('./svgo.config-base.js');
const componentConfig = require('./svgo.config-component.js');
const defaultConfig = require('./svgo.config-default.js');

const resolveConfig = (iconType) => {
  switch (iconType) {
    case 'base':
      return baseConfig;
    case 'illustrative':
      return illustrativeConfig;
    case 'component':
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
      format: 'esm',
      sourcemap: true,
      preserveModules: true
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      svgr({
        typescript: true,
        icon: true,
        svgoConfig: resolveConfig(iconType)
      }),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true
      })
    ]
  };
};

export default [
  buildIcons('base'),
  buildIcons('illustrative'),
  buildIcons('component'),
  buildIcons('logo'),
  buildIcons('doctype')
];
