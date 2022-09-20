import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete'
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";
import { terser } from "@chiogen/rollup-plugin-terser";
import exportPlugin from "rollup-plugin-export-default";
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'cjs',
      sourcemap: false,
    },
  ],
  external: ['undici'],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    terser(),
    // exportPlugin(),
    del({ targets: 'lib/*' })
    // babel({ babelHelpers: 'bundled' }),
  ],
};
