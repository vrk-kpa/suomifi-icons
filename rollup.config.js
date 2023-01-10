import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
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

const buildIcons = () => {
  return {
    input: `src/index.ts`,
    output: [
      {
        dir: `dist/esm`,
        format: 'esm',
        sourcemap: true
      },
      {
        dir: `dist/cjs`,
        format: 'cjs',
        sourcemap: true
      }
    ],
    preserveModules: true,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true })
    ]
  };
};

export default buildIcons();
