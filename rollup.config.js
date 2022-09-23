import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from '@chiogen/rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false,
    },
  ],
  external: ['undici'],
  plugins: [
    typescript(),
    resolve({ extensions }),
    commonjs(),
    terser(),
    del({ targets: 'lib/*' }),
  ],
};
