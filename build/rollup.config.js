'use strict'

const path = require('path');
const { DEFAULT_EXTENSIONS } = require('@babel/core');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const typescript = require('rollup-plugin-typescript2');
const banner = require('./banner.js');

const BUNDLE = process.env.BUNDLE === 'true';
const ESM = process.env.ESM === 'true';

let fileDest = `dist${ESM ? '.esm' : ''}`;
const external = ['@popperjs/core'];
const plugins = [
    typescript({
        tsconfig: path.resolve(__dirname, '../tsconfig.json'),
    }),
    babel({
        // Only transpile our source code
        exclude: 'node_modules/**',
        // Include the helpers in the bundle, at most one copy of each
        babelHelpers: 'bundled',
        extensions: [ ...DEFAULT_EXTENSIONS, '.ts' ]
    }),
];
const globals = {
    '@popperjs/core': 'Popper'
};

if (BUNDLE) {
    fileDest += '.bundle';
    // Remove last entry in external array to bundle Popper
    external.pop();
    delete globals['@popperjs/core'];
    plugins.push(
        replace({
            'process.env.NODE_ENV': '"production"',
            preventAssignment: true
        }),
        nodeResolve()
    );
}

const rollupConfig = {
    input: path.resolve(__dirname, '../src/algorithms-and-data-structures-in-js.ts'),
    output: {
        banner,
        file: path.resolve(__dirname, `../dist/${fileDest}.js`),
        format: ESM ? 'esm' : 'umd',
        globals
    },
    external,
    plugins
};

if (!ESM) {
    rollupConfig.output.name = 'algorithmsAndDataStructuresInJS';
}

module.exports = rollupConfig;
