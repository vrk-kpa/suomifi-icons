import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import glob from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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
    input: Object.fromEntries(
      glob.sync(`src/${iconType}Icons/*.*`).map((file) => [
        // This remove `src/` as well as the file extension from each file, so e.g.
        // src/nested/foo.js becomes nested/foo
        path.relative(
          'src',
          file.slice(0, file.length - path.extname(file).length)
        ),
        // This expands the relative paths to absolute paths, so e.g.
        // src/nested/foo becomes /project/src/nested/foo.js
        fileURLToPath(new URL(file, import.meta.url))
      ])
    ),
    output: [
      {
        dir: `dist/${iconType}Icons/esm`,
        format: 'esm',
        sourcemap: true
      },
      {
        dir: `dist/${iconType}Icons/cjs`,
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      svgr({
        typescript: true,
        icon: true,
        svgoConfig: resolveConfig(iconType),
        exportType: 'named'
      }),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true })
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
