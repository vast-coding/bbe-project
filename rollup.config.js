/* eslint-env node */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import externals from 'rollup-plugin-node-externals';
import pkg from './package.json';
import * as path from 'path';

const cjsDistDir = path.dirname(pkg.main);
const esmDistDir = path.dirname(pkg.module);

export default [
  {
    input: {
      index: './src/index.js',
    },
    plugins: [
      // Delete existing build files.
      del({ targets: 'dist/*' }),

      // Do not bundle `package.json dependencies`.
      // E.g. React, styled-components, etc.
      externals({ deps: true }),

      // files to bundle
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),

      // convert images to base64

      // share Babel's injected helper, which greatly reduces bundle size.
      // Do not compile any files from `node_modules`.
      // Compile these files: `.js`, `.jsx`, `.ts` and `.tsx` files.
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),

      // Convert CommonJS modules into ES modules.
      commonjs(),
    ],
    output: [
      { dir: cjsDistDir, format: 'cjs', sourcemap: true },
      // { dir: esmDistDir, format: 'es', sourcemap: true },
    ],
  },
];
