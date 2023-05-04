import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

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
        sourcemap: true,
        exports: 'auto' // Explicit 'auto' needed to silence rollop warning https://rollupjs.org/guide/en/#outputexports
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
