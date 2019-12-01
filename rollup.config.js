'use strict';

import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import minify from 'rollup-plugin-minify-html-literals';
import { defaultShouldMinify } from 'minify-html-literals';
import { terser } from 'rollup-plugin-terser';
import size from 'rollup-plugin-size';

export default {
  input: 'src/index.ts',
  output: {
    file: 'docs/scripts/app.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve({
      dedupe: [
        '@captaincodeman/rdx',
        '@captaincodeman/rdx-model',
        '@captaincodeman/router',
        'lit-element',
        'lit-html',
      ]
    }),
    minify({
      options: {
        shouldMinify: (template) => defaultShouldMinify(template) || 
                                    template.parts.some(part => part.text.includes('<style'))
      }
    }),
    typescript({ typescript: require('typescript') }),
    terser({
      output: {
        comments: false
      }
    }),
    size(),
  ],
  preserveSymlinks: true,
}
